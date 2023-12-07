import "dotenv/config"

export default {
    app: {
        port: process.env.PORT,
    },
    apiKeys: {
        sendGrid: process.env.SENDGRID_API_KEY
    }
}