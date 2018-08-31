const puppeteer = require('puppeteer');

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

(async () => {
  const browser = await puppeteer.launch({ ignoreHTTPSErrors: true });
  const page = await browser.newPage();
  await page.goto('https://google.com');

  await page.screenshot({
    path: `screenshot.png`,
    fullPage: true
  });

  await delay();
  await browser.close();
})();
