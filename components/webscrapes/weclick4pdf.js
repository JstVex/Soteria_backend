const puppeteer = require("puppeteer");

const pageUrl = "https://weclick4pdf.com/"
const pageUrlActivity = "https://weclick4pdf.com/category/lifestyle/activity/"

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
                "div.content > div > h2 > a"
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

        const newsTitle = await page.evaluate(() => {
            const newsTitles = document.querySelectorAll(
                "article > div.content > div > h2 > a"
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
                "article > div.media > a > span"
            );
            let newsImagesLists = [];

            newsImgs.forEach(img => {
                const currentImg = img.style;
                newsImagesLists.push(currentImg);
            })
            return newsImagesLists;
        });

        dataObj = {
            amount: newsTitle.length,
            title: newsTitle,
            img: newsImage
        };

    } catch (e) {
        console.log(e);
    }

    console.log(dataObj)
    browser.close();
    return dataObj;
};

// webscrapping(pageUrl).catch(console.error);

module.exports = webscrappingActivity;