const express = require("express")
const router = express.Router()
const resumeController = require("../Controllers/resume")
const { upload } = require("../utils/multer")

router.post("/addResume", upload.single("resume"), resumeController.addResume)
router.get('/get/:user', resumeController.getAllResumesForUser)
router.get('/get', resumeController.getResumeForAdmin)

module.exports = router