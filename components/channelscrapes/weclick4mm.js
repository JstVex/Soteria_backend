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
            const titles = document.querySelectorAll(
                "#video-title"
            );
            let titlesList = [];

            titles.forEach(title => {
                const currentTitle = title.innerText;
                titlesList.push(currentTitle);
            })
            return titlesList;
        });

        const newsImages = await page.evaluate(() => {
            const images = document.querySelectorAll(
                "#thumbnail > yt-image > img"
            );
            let imagesList = [];

            images.forEach(img => {
                const currentImg = img.src;
                imagesList.push(currentImg);
            })
            return imagesList;
        });

        const newsViews = await page.evaluate(() => {
            const views = document.querySelectorAll(
                "#metadata-line > span:nth-child(3)"
            );
            let viewsList = [];

            views.forEach(view => {
                const currentView = view.innerText;
                viewsList.push(currentView);
            })
            return viewsList;
        });

        const newsDates = await page.evaluate(() => {
            const dates = document.querySelectorAll(
                "#metadata-line > span:nth-child(4)"
            );
            let datesList = [];

            dates.forEach(date => {
                const currentDate = date.innerText;
                datesList.push(currentDate);
            })
            return datesList;
        });

        dataObj = {
            titlesAmount: newsTitle.length,
            titles: newsTitle,
            imgsAmount: newsImages.length,
            imgs: newsImages,
            viewsAmount: newsViews.length,
            views: newsViews,
            datesAmount: newsDates.length,
            dates: newsDates,
            channel: "weclick4mm"
        };

    } catch (e) {
        console.log(e);
    }

    console.log(dataObj)
    browser.close();
    return dataObj;
};

module.exports = channelscrapping;