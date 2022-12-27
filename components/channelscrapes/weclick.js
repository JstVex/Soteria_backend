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

        const newsUrls = await page.evaluate(() => {
            const dates = document.querySelectorAll(
                "#thumbnail"
            );
            let urlsList = [];

            dates.forEach(url => {
                const currentUrl = url.href;
                urlsList.push(currentUrl);
            })
            return urlsList.slice(1);
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
            urlsAmount: newsUrls.length,
            urls: newsUrls,
            channel: "weclick"
        };

    } catch (e) {
        console.log(e);
    }

    console.log(dataObj)
    browser.close();
    return dataObj;
};

module.exports = channelscrapping;