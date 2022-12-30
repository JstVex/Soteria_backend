const puppeteer = require("puppeteer");

const webscrappingWeclick4pdfFirstPost = async pageUrl => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    let dataObj = {};

    try {
        await page.goto(pageUrl);

        const newTitles = await page.evaluate(() => {
            const tiles = document.querySelectorAll(
                "section > div > div > div > article:nth-child(1) > div.content > div.post-meta.post-meta-a.has-below > h2 > a"
            );

            let titlesList = [];

            tiles.forEach(title => {
                const currentTitle = title.innerText;
                titlesList.push(currentTitle);
            })
            return titlesList;
        });

        // const newTitle = await page.evaluate(() => {
        //     const title = document.querySelector(
        //         "#post-719 > div > section.has-el-gap.el-gap-default.elementor-section.elementor-top-section.elementor-element.elementor-element-4b7accaf.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-5d5634e.main-content > div > div.elementor-element.elementor-element-61d06b8a.elementor-widget.elementor-widget-smartmag-highlights > div > section > div.block-content > div > div.loop.loop-grid.loop-grid-base.grid.grid-2.md\:grid-2.xs\:grid-1 > article:nth-child(1) > div.content > div.post-meta.post-meta-a.has-below > h2 > a"
        //     ).innerText;

        //     return title;
        // });

        const newImgs = await page.evaluate(() => {
            const newsImgs = document.querySelectorAll(
                "div > div > div > section > div > div > div > article:nth-child(1) > div.media > a > span"
            );
            let imgsList = [];

            newsImgs.forEach(img => {
                const currentImg = img.dataset.bgsrc;
                imgsList.push(currentImg);
            })
            return imgsList;
        });

        // const newImg = await page.evaluate(() => {
        //     const img = document.querySelector(
        //         "#post-719 > div > section.has-el-gap.el-gap-default.elementor-section.elementor-top-section.elementor-element.elementor-element-4b7accaf.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-5d5634e.main-content > div > div.elementor-element.elementor-element-61d06b8a.elementor-widget.elementor-widget-smartmag-highlights > div > section > div.block-content > div > div.loop.loop-grid.loop-grid-base.grid.grid-2.md\:grid-2.xs\:grid-1 > article:nth-child(1) > div.media > a > span"
        //     ).dataset.bgsrc;

        //     return img;
        // });

        const newTexts = await page.evaluate(() => {
            const texts = document.querySelectorAll(
                "section > div > div > div > article:nth-child(1) > div.content > div.excerpt > p"
            );
            let textsList = [];

            texts.forEach(text => {
                const currentText = text.innerText;
                textsList.push(currentText);
            })
            return textsList;
        });

        // const newText = await page.evaluate(() => {
        //     const text = document.querySelector(
        //         "#post-719 > div > section.has-el-gap.el-gap-default.elementor-section.elementor-top-section.elementor-element.elementor-element-4b7accaf.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-5d5634e.main-content > div > div.elementor-element.elementor-element-61d06b8a.elementor-widget.elementor-widget-smartmag-highlights > div > section > div.block-content > div > div.loop.loop-grid.loop-grid-base.grid.grid-2.md\:grid-2.xs\:grid-1 > article:nth-child(1) > div.content > div.excerpt > p"
        //     ).innerText;

        //     return text;
        // });

        const newDates = await page.evaluate(() => {
            const dates = document.querySelectorAll(
                "section > div > div > div > article:nth-child(1) > div.content > div.post-meta.post-meta-a.has-below > div > span.meta-item.has-next-icon.date > span > time"
            );
            let datesList = [];

            dates.forEach(date => {
                const currentDate = date.innerText;
                datesList.push(currentDate);
            })
            return datesList;
        });

        // const newDate = await page.evaluate(() => {
        //     const date = document.querySelector(
        //         "#post-719 > div > section.has-el-gap.el-gap-default.elementor-section.elementor-top-section.elementor-element.elementor-element-4b7accaf.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-5d5634e.main-content > div > div.elementor-element.elementor-element-61d06b8a.elementor-widget.elementor-widget-smartmag-highlights > div > section > div.block-content > div > div.loop.loop-grid.loop-grid-base.grid.grid-2.md\:grid-2.xs\:grid-1 > article:nth-child(1) > div.content > div.post-meta.post-meta-a.has-below > div > span.meta-item.has-next-icon.date > span > time"
        //     ).innerText;

        //     return date;
        // });

        const newUrls = await page.evaluate(() => {
            const urls = document.querySelectorAll(
                "section > div > div > div > article:nth-child(1) > div.content > div.post-meta.post-meta-a.has-below > h2 > a"
            );
            let urlsList = [];

            urls.forEach(url => {
                const currentUrl = url.href;
                urlsList.push(currentUrl);
            })
            return urlsList;
        });

        // const newUrl = await page.evaluate(() => {
        //     const url = document.querySelector(
        //         "#post-719 > div > section.has-el-gap.el-gap-default.elementor-section.elementor-top-section.elementor-element.elementor-element-4b7accaf.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-5d5634e.main-content > div > div.elementor-element.elementor-element-61d06b8a.elementor-widget.elementor-widget-smartmag-highlights > div > section > div.block-content > div > div.loop.loop-grid.loop-grid-base.grid.grid-2.md\:grid-2.xs\:grid-1 > article:nth-child(1) > div.content > div.post-meta.post-meta-a.has-below > h2 > a"
        //     ).href;

        //     return url;
        // });

        dataObj = {
            titles: newTitles,
            imgs: newImgs,
            texts: newTexts,
            dates: newDates,
            urls: newUrls,
            website: 'weclick4pdf',
            firstPost: true,
            topic: ""
        };

    } catch (e) {
        console.log(e);
    }

    console.log(dataObj)
    browser.close();
    return dataObj;
};

const webscrappingWeclick4pdfTopics = async (pageUrlActivity, topic) => {
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
            firstPost: false,
            topic: topic
        };

    } catch (e) {
        console.log(e);
    }

    console.log(dataObj)
    browser.close();
    return dataObj;
};

module.exports = {
    webscrappingWeclick4pdfFirstPost,
    webscrappingWeclick4pdfTopics
};