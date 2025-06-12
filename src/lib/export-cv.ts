import puppeteer from 'puppeteer';

export const exportCV = async () => {
  const productionOrigin = process.env.PRODUCTION_ORIGIN;

  if (!productionOrigin) {
    throw new Error('PRODUCTION_ORIGIN is not defined');
  }

  const browser = await puppeteer.launch({ browser: 'firefox' });
  const page = await browser.newPage();
  await page.goto(productionOrigin, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: 'dist/cv.pdf',
    width: '1024px',
    height: `${1024 * 1.414}px`,
    margin: {
      top: '1.2cm',
      bottom: '1.2cm',
    },
  });
  await browser.close();
};

exportCV();
