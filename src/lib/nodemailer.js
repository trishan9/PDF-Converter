import nodemailer from "nodemailer"
import sendgridTransport from "nodemailer-sendgrid-transport"
import config from "../config/index.js"

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: config.apiKeys.sendGrid
    }
}))

export const sendMail = async (message) => {
    await transporter.sendMail(message)
}