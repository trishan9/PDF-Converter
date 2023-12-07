import { Router } from "express"

import pdfRouter from "./pdf/pdf.router.js"

const router = Router()

router.use("/pdf", pdfRouter)

export default router