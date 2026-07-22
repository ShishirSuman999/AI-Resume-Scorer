import React, { useState, useContext } from 'react'
import styles from './Dashboard.module.css'
import Skeleton from '@mui/material/Skeleton'
import WithAuthHOC from '../../utils/HOC/withAuthHOC'
import axios from '../../utils/axios'
import { AuthContext } from '../../utils/AuthContext'
import ReactMarkdown from "react-markdown"

const Dashboard = () => {

  const [uploadFileText, setUploadFileText] = useState("Upload your resume here")
  const [loading, setLoading] = useState(false)
  const [resumeFile, setResumeFile] = useState(null)
  const [jobDesc, setJobDesc] = useState("")
  const [result, setResult] = useState(null)

  const {userInfo} = useContext(AuthContext)

  const handleOnChangeFile = (e) => {
    setResumeFile(e.target.files[0])
    setUploadFileText(e.target.files[0].name)
  }

  const handleUpload = async () => {
    setResult(null)
    if (!jobDesc || !resumeFile) {
      alert("Please fill in all the fields")
      return
    }
    const formData = new FormData()
    formData.append('resume', resumeFile)
    formData.append('job_desc', jobDesc)
    formData.append('user', userInfo._id)
    setLoading(true)
    try {
      const result = await axios.post('/api/resume/addResume', formData)
      setResult(result.data.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.Dashboard}>
      <div className={styles.DashboardLeft}>
        <div className={styles.DashboardHeader}>
          <div className={styles.DashboardHeaderTitle}>Smart Resume Scorer</div>
          <div className={styles.DashboardHeaderLargeTitle}>Resume Match Score</div>
        </div>

        <div className={styles.alertInfo}>
          <div>🚨 Important Instructions:</div>
          <div className={styles.DashboardInstructions}>
            <div>1️⃣ 📜 Please paste the complete job description (JD) in the "Job Description" field before submission</div>
            <div>2️⃣ 📎 Please upload your resume in PDF (.pdf) format only</div>
          </div>
        </div>

        <div className={styles.DashboardUploadResume}>
          <div className={styles.DashboardResumeBlock}>
            { uploadFileText }
          </div>
          <div className={styles.DashboardInputField}>
            <label htmlFor='inputField' className={styles.analyzeAIBtn}>
              Upload Resume
            </label>
            <input type='file' id='inputField' accept='.pdf' onChange={handleOnChangeFile} />
          </div>
        </div>

        <div className={styles.jobDesc}>
          <textarea value={jobDesc} onChange={(e) => {setJobDesc(e.target.value)}} className={styles.textArea} placeholder='Paste job description' rows={8} cols={70} />
          <div className={styles.AnalyzeBtn} onClick={handleUpload}>Analyze</div>
        </div>
      </div>

      <div className={styles.DashboardRight}>
        <div className={styles.DashboardRightTopCard}>
          <div>Analyze with AI</div>
          <img className={styles.profileImg} src={userInfo?.photoUrl} />
          <h2>{userInfo?.name}</h2>
        </div>

        {
          result && (
            <div className={styles.DashboardRightTopCard}>
              <div>Result</div>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 20}}>
                <h1>{result?.score}%</h1>
              </div>
              <div className={styles.feedback}>
                <h2>Feedback</h2>
                <div className={styles.feedbackMarkdown}>
                  <ReactMarkdown>{result?.feedback}</ReactMarkdown>
                </div>
              </div>
            </div>
          )
        }

        {
          loading && <Skeleton variant='rectangular' sx={{ borderRadius: "5px" }} height={280} />
        }
      </div>
    </div>
  )
}

export default WithAuthHOC(Dashboard)