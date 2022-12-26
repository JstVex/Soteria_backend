const ChannelscrapeArray = require("../models/ChannelscrapesArray");
const mongoose = require('mongoose');

const saveWeClick = (dataObj) => {
    try {
        ChannelscrapeArray.find({}, function (err, list) {
            return list;
        }).clone().then(list => {
            if (list == "") {
                console.log(`New data created: ${JSON.stringify(dataObj)}`);
                const newVids = new ChannelscrapeArray(dataObj);
                return newVids.save().catch(err => console.log(err));
            }

            const { titlesAmount, titles, imgsAmount, imgs, viewsAmount, views, datesAmount, dates, channel } = dataObj;

            const dbId = list[0]._id;
            const dbTitlesAmount = list[0].titlesAmount;
            const dbTitles = list[0].titles;
            const dbImgsAmount = list[0].imgsAmount;
            const dbImgs = list[0].imgs;
            const dbViewsAmount = list[0].viewsAmount;
            const dbViews = list[0].views;
            const dbDatesAmount = list[0].datesAmount;
            const dbDates = list[0].dates;
            const dbChannel = list[0].channel;

            let catchDifference = false;

            if (dbTitlesAmount !== titlesAmount) {
                catchDifference = true;
            } else {
                dbTitles.forEach((title, i) => {
                    if (title !== titles[i]) catchDifference = true;
                });
            }

            if (dbImgsAmount !== imgsAmount) {
                catchDifference = true;
            } else {
                dbImgs.forEach((img, i) => {
                    if (img !== imgs[i]) catchDifference = true;
                });
            }

            if (dbViewsAmount !== viewsAmount) {
                catchDifference = true;
            } else {
                dbViews.forEach((view, i) => {
                    if (view !== views[i]) catchDifference = true;
                });
            }

            if (dbDatesAmount !== datesAmount) {
                catchDifference = true;
            } else {
                dbDates.forEach((date, i) => {
                    if (date !== dates[i]) catchDifference = true;
                });
            }

            if (dbChannel !== channel) {
                catchDifference = true;
            }

            if (catchDifference) {
                console.log('New data reported. Updating database...');
                return ChannelscrapeArray.findOneAndUpdate({ _id: dbId }, dataObj);
            }

            console.log('No new data')
        })
            .catch(err => console.log(err));

    } catch (err) {
        console.log(err);
    }
};

// get all channelscrapes
const getChannelscrapes = async (req, res) => {
    const channelscrapes = await ChannelscrapeArray.find({});
    res.status(200).json(channelscrapes)
}

const getAllWeclick = async (req, res) => {
    const channelscrapes = await ChannelscrapeArray.find({ channel: "weclick" })
    res.status(200).json(channelscrapes)
}

// get a single channelscrape
const getChannelscrape = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such channelscrape' })
    }

    const channelscrape = await ChannelscrapeArray.findById(id);

    if (!channelscrape) {
        return res.status(404).json({ error: 'no such channelscrape' })
    }

    res.status(200).json(channelscrape)
}

// creat a new channelscrape
const createChannelscrape = async (req, res) => {
    const { titlesAmount, titles, imgsAmount, imgs, viewsAmount, views, datesAmount, dates } = req.body;

    let emptyFields = [];

    if (!titles) {
        emptyFields.push('titles')
    }
    if (!imgs) {
        emptyFields.push('imgs')
    }
    if (!views) {
        emptyFields.push('views')
    }
    if (!dates) {
        emptyFields.push('dates')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'please fill in the fields', emptyFields })
    }
    try {
        const channelscrape = await ChannelscrapeArray.create({ titlesAmount, titles, imgsAmount, imgs, viewsAmount, views, datesAmount, dates })
        res.status(200).json(channelscrape)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a donation
const deleteChannelscrape = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such channelscrape' })
    }

    const channelscrape = await ChannelscrapeArray.findOneAndDelete({ _id: id });

    if (!channelscrape) {
        return res.status(404).json({ error: 'no such channelscrape' })
    }

    res.status(200).json(channelscrape)
}

// update a donation
const updateChannelscrape = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such channelscrape' })
    }

    const channelscrape = await ChannelscrapeArray.findOneAndUpdate({ _id: id }, { ...req.body }, {
        new: true
    });

    if (!channelscrape) {
        return res.status(404).json({ error: 'no such channelscrape' })
    }

    res.status(200).json(channelscrape)
}


module.exports = {
    saveWeClick,
    getChannelscrapes,
    getChannelscrape,
    createChannelscrape,
    deleteChannelscrape,
    updateChannelscrape,
    getAllWeclick
};