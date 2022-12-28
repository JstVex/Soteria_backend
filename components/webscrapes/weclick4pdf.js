const puppeteer = require("puppeteer");

const webscrapping = async pageUrl => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    let dataObj = {};

    try {
        await page.goto(pageUrl);

        const news = await page.evaluate(() => {
            const newsData = document.querySelectorAll(
                "body > div.main-wrap > div.main.ts-contain.cf.right-sidebar > div.ts-row > div > section > div > div > article > div.content > div.post-meta.post-meta-a.has-below > h2 > a"
            );
            let newsList = [];
            newsData.forEach(title => {
                const currentTitle = title.innerText;
                newsList.push(currentTitle);
            })
            return newsList;
        });

        dataObj = {
            amount: news.length,
            title: news
        };

    } catch (e) {
        console.log(e);
    }

    console.log(dataObj)
    browser.close();
    return dataObj;
};

const webscrappingActivity = async pageUrlActivity => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    let dataObj = {};

    try {
        await page.goto(pageUrlActivity);

        const newTitles = await page.evaluate(() => {
            const tiles = document.querySelectorAll(
                "body > div.main-wrap > div.main.ts-contain.cf.right-sidebar > div.ts-row > div > section > div > div > article > div.content > div.post-meta.post-meta-a.has-below > h2 > a"
            );
            let titlesList = [];

            tiles.forEach(title => {
                const currentTitle = title.innerText;
                titlesList.push(currentTitle);
            })
            return titlesList;
        });

        const newImgs = await page.evaluate(() => {
            const newsImgs = document.querySelectorAll(
                "body > div.main-wrap > div.main.ts-contain.cf.right-sidebar > div.ts-row > div > section > div > div > article > div.media > a > span"
            );
            let newsImagesLists = [];

            newsImgs.forEach(img => {
                const currentImg = img.dataset.bgsrc;
                newsImagesLists.push(currentImg);
            })
            return newsImagesLists;
        });

        const newTexts = await page.evaluate(() => {
            const texts = document.querySelectorAll(
                "body > div.main-wrap > div.main.ts-contain.cf.right-sidebar > div.ts-row > div > section > div > div > article > div.content > div.excerpt > p"
            );
            let textsList = [];

            texts.forEach(text => {
                const currentText = text.innerText;
                textsList.push(currentText);
            })
            return textsList;
        });

        const newDates = await page.evaluate(() => {
            const dates = document.querySelectorAll(
                "body > div.main-wrap > div.main.ts-contain.cf.right-sidebar > div.ts-row > div > section > div > div > article > div.content > div.post-meta.post-meta-a.has-below > div > span.meta-item.has-next-icon.date > span > time"
            );
            let datesList = [];

            dates.forEach(date => {
                const currentDate = date.innerText;
                datesList.push(currentDate);
            })
            return datesList;
        });

        const newUrls = await page.evaluate(() => {
            const urls = document.querySelectorAll(
                "body > div.main-wrap > div.main.ts-contain.cf.right-sidebar > div.ts-row > div > section > div > div > article > div.content > div.post-meta.post-meta-a.has-below > h2 > a"
            );
            let urlsList = [];

            urls.forEach(url => {
                const currentUrl = url.href;
                urlsList.push(currentUrl);
            })
            return urlsList;
        });

        dataObj = {
            titlesAmount: newTitles.length,
            titles: newTitles,
            imgsAmount: newImgs.length,
            imgs: newImgs,
            textsAmount: newTexts.length,
            texts: newTexts,
            datesAmount: newDates.length,
            dates: newDates,
            urlsAmount: newUrls.length,
            urls: newUrls,
            website: "weclick4pdf",
            topic: "activity"
        };

    } catch (e) {
        console.log(e);
    }

    console.log(dataObj)
    browser.close();
    return dataObj;
};

module.exports = webscrappingActivity;