import express from "express"
import cors from "cors"
import helmet from "helmet"

import config from "./config/index.js"
import router from "./modules/main.router.js"

const app = express()

app.use(cors())
app.use(helmet())

app.use(express.json())

app.use("/api", router)

app.listen(config.app.port, () => console.log(`Listening on port ${config.app.port}`))