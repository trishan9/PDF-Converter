import puppeteer from "puppeteer"
import fs from "fs"

const convertHtmlToPdf = async (htmlFilePath) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const html = fs.readFileSync(htmlFilePath, 'utf-8');
        await page.setContent(html, { waitUntil: 'domcontentloaded' });

        await page.emulateMediaType('screen');

        await page.pdf({
            path: './public/temp/converted.pdf',
            margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
            printBackground: true,
            format: 'A4',
        });

        await browser.close();
    } catch (err) {
        console.log(err)
    } finally {
        fs.unlinkSync(htmlFilePath)
    }
}

export { convertHtmlToPdf }