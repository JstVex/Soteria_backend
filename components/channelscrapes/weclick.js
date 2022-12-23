const puppeteer = require("puppeteer");

const channelscrapping = async pageUrl => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    let dataObj = {};

    try {
        await page.goto(pageUrl);

        const newsTitle = await page.evaluate(() => {
            const newsTitles = document.querySelectorAll(
                "#video-title"
            );
            let newsTitlesList = [];

            newsTitles.forEach(title => {
                const currentTitle = title.innerText;
                newsTitlesList.push(currentTitle);
            })
            return newsTitlesList;
        });

        const newsImage = await page.evaluate(() => {
            const newsImgs = document.querySelectorAll(
                "#thumbnail > yt-image > img"
            );
            let newsImagesLists = [];

            newsImgs.forEach(img => {
                const currentImg = img.src;
                newsImagesLists.push(currentImg);
            })
            return newsImagesLists;
        });

        dataObj = {
            titleamount: newsTitle.length,
            title: newsTitle,
            imgamount: newsImage.length,
            img: newsImage
        };

    } catch (e) {
        console.log(e);
    }

    console.log(dataObj)
    browser.close();
    return dataObj;
};

module.exports = channelscrapping;