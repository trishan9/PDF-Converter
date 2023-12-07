import { Router } from "express"

import PdfController from "./pdf.controller.js"
import { upload } from "../../middlewares/multer.middleware.js"

const pdfRouter = Router()

pdfRouter.post("/", upload.single("html"), PdfController.httpConvertHtmlToPdf)

export default pdfRouter