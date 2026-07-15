const ResumeModel = require("../Models/resume");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY,
});

exports.addResume = async (req, res) => {
    try {
        const { job_desc, user } = req.body;

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload a resume."
            });
        }

        // Read uploaded PDF
        const pdfBuffer = fs.readFileSync(req.file.path);

        // Extract text
        const pdfData = await pdfParse(pdfBuffer);

        if (!pdfData.text || pdfData.text.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Unable to extract text from the uploaded PDF."
            });
        }

        // Prevent sending an extremely large resume
        const resumeText = pdfData.text.substring(0, 12000);

        const prompt = `
You are an ATS Resume Screening Assistant.

Compare the following resume with the job description.

Return ONLY in the following format:

Score: <number out of 100>

Feedback:
- Strengths
- Missing Skills
- Weaknesses
- Suggestions

Resume:
${resumeText}

Job Description:
${job_desc}
`;

        const response = await cohere.chat({
            model: "command-a-03-2025",
            message: prompt,
            temperature: 0.3,
        });

        console.log(response);

        const feedback = response.text || "No feedback generated.";

        let score = "0";

        const match = feedback.match(/Score:\s*(\d+)/i);

        if (match) {
            score = match[1];
        }

        const newResume = new ResumeModel({
            user,
            resume_name: req.file.originalname,
            job_desc,
            score,
            feedback,
        });

        await newResume.save();

        // Delete uploaded PDF
        fs.unlinkSync(req.file.path);

        return res.status(201).json({
            success: true,
            message: "Resume analyzed successfully.",
            data: newResume,
        });

    } catch (err) {
        console.error(err);

        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        return res.status(500).json({
            success: false,
            error: err.message,
            stack: err.stack,
        });
    }
};

exports.getAllResumesForUser = async (req, res) => {
    try {
        const { user } = req.params;

        const resumes = await ResumeModel.find({ user })
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: resumes,
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};

exports.getResumeForAdmin = async (req, res) => {
    try {
        const resumes = await ResumeModel.find()
            .populate("user")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: resumes,
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};