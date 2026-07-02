const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  page.on('pageerror', error => {
    console.log('PAGE ERROR MESSAGE:', error.message);
    console.log('PAGE ERROR STACK:', error.stack);
  });
  
  await page.evaluateOnNewDocument(() => {
    window.addEventListener('error', e => {
      console.log('ERROR EVENT:', e.message, e.filename, e.lineno, e.colno);
    });
  });

  page.on('console', msg => console.log('LOG:', msg.text()));

  await page.goto('http://localhost:3002', { waitUntil: 'networkidle2' }).catch(() => {});
  await browser.close();
})();
