const puppeteer = require("puppeteer");
const credentials = require("./credentials.json");

( async () => {

    const url = 'http://79.107.104.226/eleve.html?fd=1';

    let browser = await puppeteer.launch({headless: false, args: ['--start-windowed', '--window-size=1920,1080']});
    let page = await browser.newPage();

    page.setViewport({width: 1920, height: 1080});

    await page.goto(url, { waitUntil: 'networkidle2'});

    await page.type('#id_50', credentials.username);
    await page.type('#id_51', credentials.password);

    page.click('#id_39');

    debugger;

})();