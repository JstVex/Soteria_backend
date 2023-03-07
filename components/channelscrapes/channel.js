const puppeteer = require("puppeteer");

const channelscrapping = async (pageUrl, channel) => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    let dataObj = {};

    try {
        await page.goto(pageUrl);

        const newTitle = await page.evaluate(() => {
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

        const newImages = await page.evaluate(() => {
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

        const newViews = await page.evaluate(() => {
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

        const newDates = await page.evaluate(() => {
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

        const newUrls = await page.evaluate(() => {
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

        const newPfp = await page.evaluate(() => {
            const pfp = document.querySelector(
                "#img"
            ).src;
            return pfp;
        });

        const newSubs = await page.evaluate(() => {
            const subs = document.querySelector(
                "#subscriber-count"
            ).innerText;
            return subs;
        });

        dataObj = {
            titlesAmount: newTitle.length,
            titles: newTitle,
            imgsAmount: newImages.length,
            imgs: newImages,
            viewsAmount: newViews.length,
            views: newViews,
            datesAmount: newDates.length,
            dates: newDates,
            urlsAmount: newUrls.length,
            urls: newUrls,
            pfp: newPfp,
            subs: newSubs,
            channel: channel
        };

    } catch (e) {
        console.log(e);
    }

    // console.log(dataObj)
    browser.close();
    return dataObj;
};

module.exports = channelscrapping;