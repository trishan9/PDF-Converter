import validator from "validator"
import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url';
import { CustomError } from "../../utils/customError.js";
import { convertHtmlToPdf } from "../../lib/puppeteer.js";
import { sendMail } from "../../lib/nodemailer.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const httpConvertHtmlToPdf = async (req, res) => {
    const htmlFile = req.file?.path;
    const { email } = req.body

    try {
        // Checks if html file and email exists
        if (!htmlFile || !email) {
            if (htmlFile) fs.unlinkSync(htmlFile)
            throw new CustomError(400, "Bad Request! All the fields are required!")
        }

        // Checks if email is valid
        if (!validator.isEmail(email)) {
            fs.unlinkSync(htmlFile)
            throw new CustomError(400, "Bad Request! Please provide valid email address!")
        }

        // Checks if the uploaded file is valid HTMl File
        if (!htmlFile.endsWith("html") || !htmlFile.endsWith("html")) {
            fs.unlinkSync(htmlFile)
            throw new CustomError(400, "Bad Request! Only HTML files are allowed!")
        }

        // Converts the HTML file to PDF
        await convertHtmlToPdf(htmlFile)

        const msg = {
            from: "mailtotrishan@gmail.com",
            to: email,
            subject: "Your HTML File Successfully Converted to PDF!",
            html: "<p>Hello there,</p><p>We're thrilled to inform you that your HTML file has been successfully transformed into a sleek and polished PDF document! 🎉</p><p>Our team has worked diligently to ensure a seamless conversion process, and we're delighted to deliver the results directly to you. You'll find the attached PDF file, carefully crafted from your original HTML, ready for your perusal.</p><p>Thank you for choosing our service, and we hope this document serves your needs impeccably.</p><p>Best regards,</p><p>Trishan Wagle</p>",
            attachments: [
                {
                    filename: 'converted.pdf',
                    path: path.join(__dirname, "../../../public/temp/converted.pdf"),
                    contentType: 'application/pdf'
                }
            ]
        }
        await sendMail(msg)
        fs.unlinkSync(htmlFile)
        res.json({
            success: true,
            message: "Your HTML file has been successfully converted and send to your given email address!"
        })
    } catch (err) {
        res.status(err.statusCode || 500).json({
            success: false,
            error: err.message
        })
    }
}

export default { httpConvertHtmlToPdf }