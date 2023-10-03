const ChannelscrapeArray = require("../models/ChannelscrapesArray");
const mongoose = require('mongoose');

const saveChannel = (dataObj, channel) => {
    try {
        ChannelscrapeArray.find({ channel: channel }, function (err, list) {
            return list;
        }).clone().then(list => {
            if (list == "") {
                // console.log(`New data created: ${JSON.stringify(dataObj)}`);
                const newVids = new ChannelscrapeArray(dataObj);
                return newVids.save().catch(err => console.log(err));
            }

            const { titlesAmount, titles, imgsAmount, imgs, viewsAmount, views, datesAmount, dates, urlsAmount, urls, pfp, subs, channel } = dataObj;

            const dbId = list[0]._id;
            const dbTitlesAmount = list[0].titlesAmount;
            const dbTitles = list[0].titles;
            const dbImgsAmount = list[0].imgsAmount;
            const dbImgs = list[0].imgs;
            const dbViewsAmount = list[0].viewsAmount;
            const dbViews = list[0].views;
            const dbDatesAmount = list[0].datesAmount;
            const dbDates = list[0].dates;
            const dbUrlsAmount = list[0].urlsAmount;
            const dbUrls = list[0].urls;
            const dbPfp = list[0].pfp;
            const dbSubs = list[0].subs;
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

            if (dbUrlsAmount !== urlsAmount) catchDifference = true;

            if (dbUrls[0] !== urls[0]) catchDifference = true;

            if (dbDates[0] !== dates[0]) catchDifference = true;

            if (dbChannel !== channel) {
                catchDifference = true;
            }

            if (dbPfp !== pfp) {
                catchDifference = true;
            }

            if (dbSubs !== subs) {
                catchDifference = true;
            }

            if (catchDifference) {
                console.log(`New data reported. Updating database for ${channel}`);
                return ChannelscrapeArray.findOneAndUpdate({ _id: dbId }, dataObj);
            } else {
                console.log(`No new data for ${channel}`)
            }

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

const getAllWeclick4mm = async (req, res) => {
    const channelscrapes = await ChannelscrapeArray.find({ channel: "weclick4mm" })
    res.status(200).json(channelscrapes)
}

const getAllRaungni = async (req, res) => {
    const channelscrapes = await ChannelscrapeArray.find({ channel: "raungni" })
    res.status(200).json(channelscrapes)
}

const getAllPadaytharpin = async (req, res) => {
    const channelscrapes = await ChannelscrapeArray.find({ channel: "padaytharpin" })
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
    const { titlesAmount, titles, imgsAmount, imgs, viewsAmount, views, datesAmount, dates, urlsAmount, urls, pfp, subs, channel } = req.body;

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
        const channelscrape = await ChannelscrapeArray.create({ titlesAmount, titles, imgsAmount, imgs, viewsAmount, views, datesAmount, dates, urlsAmount, urls, pfp, subs, channel })
        res.status(200).json(channelscrape)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a channelscrape
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

// update a channelscrape
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
    saveChannel,
    getChannelscrapes,
    getChannelscrape,
    createChannelscrape,
    deleteChannelscrape,
    updateChannelscrape,
    getAllWeclick,
    getAllWeclick4mm,
    getAllRaungni,
    getAllPadaytharpin
};