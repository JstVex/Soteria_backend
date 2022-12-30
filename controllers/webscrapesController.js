const WebscrapeArray = require('../models/WebscrapesArray');
const mongoose = require('mongoose');

const saveWeclick4pdfFirstPost = (dataObj) => {
    try {
        WebscrapeArray.find({ firstPost: true }, function (err, list) {
            return list;
        }).clone().then(list => {
            if (list == "") {
                console.log(`New data created: ${JSON.stringify(dataObj)}`);
                const newVids = new WebscrapeArray(dataObj);
                return newVids.save().catch(err => console.log(err));
            }

            const { titles, imgs, texts, dates, urls, website } = dataObj;

            const dbId = list[0]._id;
            const dbTitles = list[0].titles;
            const dbImgs = list[0].imgs;
            const dbTexts = list[0].texts;
            const dbDates = list[0].dates;
            const dbUrls = list[0].urls;
            const dbWebsite = list[0].website;

            let catchDifference = false;

            if (dbTitles !== titles) {
                catchDifference = true;
            }

            if (dbImgs !== imgs) {
                catchDifference = true;
            }

            if (dbTexts !== texts) {
                catchDifference = true;
            }

            if (dbDates !== dates) {
                catchDifference = true;
            }

            if (dbUrls !== urls) {
                catchDifference = true;
            }

            if (dbWebsite !== website) {
                catchDifference = true;
            }

            if (catchDifference) {
                console.log('New data reported. Updating database...');
                return WebscrapeArray.findOneAndUpdate({ _id: dbId }, dataObj);
            }
            console.log('No new data')
        })
            .catch(err => console.log(err));

    } catch (err) {
        console.log(err);
    }
};


const saveWeclick4pdfTopics = (dataObj, topic) => {
    try {
        WebscrapeArray.find({ website: 'weclick4pdf', topic: topic }, function (err, list) {
            return list;
        }).clone().then(list => {
            if (list == "") {
                console.log(`New data created: ${JSON.stringify(dataObj)}`);
                const newVids = new WebscrapeArray(dataObj);
                return newVids.save().catch(err => console.log(err));
            }

            const { titlesAmount, titles, imgsAmount, imgs, textsAmount, texts, datesAmount, dates, urlsAmount, urls, website, firstPost, topic } = dataObj;

            const dbId = list[0]._id;
            const dbTitlesAmount = list[0].titlesAmount;
            const dbTitles = list[0].titles;
            const dbImgsAmount = list[0].imgsAmount;
            const dbImgs = list[0].imgs;
            const dbTextsAmount = list[0].textsAmount;
            const dbTexts = list[0].texts;
            const dbDatesAmount = list[0].datesAmount;
            const dbDates = list[0].dates;
            const dbUrlsAmount = list[0].urlsAmount;
            const dbUrls = list[0].urls;
            const dbWebsite = list[0].website;
            const dbFirstPost = list[0].firstPost;
            const dbTopic = list[0].topic;

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

            if (dbTextsAmount !== textsAmount) {
                catchDifference = true;
            } else {
                dbTexts.forEach((view, i) => {
                    if (view !== texts[i]) catchDifference = true;
                });
            }

            if (dbDatesAmount !== datesAmount) {
                catchDifference = true;
            } else {
                dbDates.forEach((date, i) => {
                    if (date !== dates[i]) catchDifference = true;
                });
            }

            if (dbUrlsAmount !== urlsAmount) {
                catchDifference = true;
            } else {
                dbUrls.forEach((url, i) => {
                    if (url !== urls[i]) catchDifference = true;
                });
            }

            if (dbWebsite !== website) {
                catchDifference = true;
            }

            if (dbFirstPost !== firstPost) {
                catchDifference = true;
            }

            if (dbTopic !== topic) {
                catchDifference = true;
            }

            if (catchDifference) {
                console.log('New data reported. Updating database...');
                return WebscrapeArray.findOneAndUpdate({ _id: dbId }, dataObj);
            }
            console.log('No new data')
        })
            .catch(err => console.log(err));

    } catch (err) {
        console.log(err);
    }
};

// get all webscrapes
const getWebscrapes = async (req, res) => {
    const webscrapes = await WebscrapeArray.find({});
    res.status(200).json(webscrapes)
}

const getAllFirstPosts = async (req, res) => {
    const webscrapes = await WebscrapeArray.find({ firstPost: true });
    res.status(200).json(webscrapes)
}

const getAllWeclick4pdf = async (req, res) => {
    const webscrapes = await WebscrapeArray.find({ website: "weclick4pdf", firstPost: false })
    res.status(200).json(webscrapes)
}

const getAllWeclick4pdfActivity = async (req, res) => {
    const webscrapes = await WebscrapeArray.find({ website: "weclick4pdf", topic: "activity" })
    res.status(200).json(webscrapes)
}

const getAllWeclick4pdfBeauty = async (req, res) => {
    const webscrapes = await WebscrapeArray.find({ website: "weclick4pdf", topic: "beauty" })
    res.status(200).json(webscrapes)
}

const getAllWeclick4pdfTravel = async (req, res) => {
    const webscrapes = await WebscrapeArray.find({ website: "weclick4pdf", topic: "travel" })
    res.status(200).json(webscrapes)
}

const getAllWeclick4pdfWorld = async (req, res) => {
    const webscrapes = await WebscrapeArray.find({ website: "weclick4pdf", topic: "world" })
    res.status(200).json(webscrapes)
}

const getAllWeclick4pdfGeneral = async (req, res) => {
    const webscrapes = await WebscrapeArray.find({ website: "weclick4pdf", topic: "general" })
    res.status(200).json(webscrapes)
}

const getAllWeclick4pdfFitness = async (req, res) => {
    const webscrapes = await WebscrapeArray.find({ website: "weclick4pdf", topic: "fitness" })
    res.status(200).json(webscrapes)
}

// get a single webscrape
const getWebscrape = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such webscrape' })
    }

    const webscrape = await WebscrapeArray.findById(id);

    if (!webscrape) {
        return res.status(404).json({ error: 'no such webscrape' })
    }

    res.status(200).json(webscrape)
}

// creat a new webscrape
const createWebscrape = async (req, res) => {
    const { titlesAmount, titles, imgsAmount, imgs, textsAmount, texts, datesAmount, dates, urlsAmount, urls, website, topic } = req.body;

    let emptyFields = [];

    if (!titles) {
        emptyFields.push('titles')
    }
    if (!imgs) {
        emptyFields.push('imgs')
    }
    if (!texts) {
        emptyFields.push('texts')
    }
    if (!dates) {
        emptyFields.push('dates')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'please fill in the fields', emptyFields })
    }
    try {
        const webscrape = await WebscrapeArray.create({ titlesAmount, titles, imgsAmount, imgs, textsAmount, texts, datesAmount, dates, urlsAmount, urls, website, topic })
        res.status(200).json(webscrape)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a donation
const deleteWebscrape = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such webscrape' })
    }

    const webscrape = await WebscrapeArray.findOneAndDelete({ _id: id });

    if (!webscrape) {
        return res.status(404).json({ error: 'no such webscrape' })
    }

    res.status(200).json(webscrape)
}

// update a donation
const updateWebscrape = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such webscrape' })
    }

    const webscrape = await WebscrapeArray.findOneAndUpdate({ _id: id }, { ...req.body }, {
        new: true
    });

    if (!webscrape) {
        return res.status(404).json({ error: 'no such webscrape' })
    }

    res.status(200).json(webscrape)
}

module.exports = {
    saveWeclick4pdfFirstPost,
    saveWeclick4pdfTopics,
    getWebscrapes,
    getWebscrape,
    getAllFirstPosts,
    createWebscrape,
    deleteWebscrape,
    updateWebscrape,
    getAllWeclick4pdf,
    getAllWeclick4pdfActivity,
    getAllWeclick4pdfBeauty,
    getAllWeclick4pdfTravel,
    getAllWeclick4pdfWorld,
    getAllWeclick4pdfGeneral,
    getAllWeclick4pdfFitness
};