import React from 'react'
import styles from './Dashboard.module.css'
import Skeleton from '@mui/material/Skeleton'

export default function Dashboard() {
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
            Upload your resume here
          </div>
          <div className={styles.DashboardInputField}>
            <label htmlFor='inputField' className={styles.analyzeAIBtn}>
              Upload Resume
            </label>
            <input type='file' id='inputField' accept='.pdf' />
          </div>
        </div>

        <div className={styles.jobDesc}>
          <textarea className={styles.textArea} placeholder='Paste job description' rows={8} cols={70} />
          <div className={styles.AnalyzeBtn}>Analyze</div>
        </div>
      </div>

      <div className={styles.DashboardRight}>
        <div className={styles.DashboardRightTopCard}>
          <div>Analyze with AI</div>
          <img className={styles.profileImg} src={"https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg"} />
          <h2>User</h2>
        </div>

        {/* <div className={styles.DashboardRightTopCard}>
          <div>Result</div>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 20}}>
            <h1>75%</h1>
          </div>
          <div className={styles.feedback}>
            <h2>Feedback</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae</p>
          </div>
        </div> */}

        <Skeleton variant='rectangular' sx={{ borderRadius: "5px" }} height={280} />
      </div>
    </div>
  )
}
