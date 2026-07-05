import React from 'react'
import styles from './History.module.css'
import Skeleton from '@mui/material/Skeleton'
import WithAuthHOC from '../../utils/HOC/withAuthHOC'

const History = () => {
  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>

        <Skeleton variant="rectangular" width={"100%"} height={"100%"} sx={{ borderRadius: "5px" }} />

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend Developer</h2>
          <p>Resume Name: Resume.pdf</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A esse numquam odit fugiat blanditiis minima eveniet dolorum cum iure rerum sit commodi, dicta assumenda consequuntur modi quis quas facere ut.</p>
          <p>Dated: 7/2/2026</p>
        </div>
        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend Developer</h2>
          <p>Resume Name: Resume.pdf</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A esse numquam odit fugiat blanditiis minima eveniet dolorum cum iure rerum sit commodi, dicta assumenda consequuntur modi quis quas facere ut.</p>
          <p>Dated: 7/2/2026</p>
        </div>
        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend Developer</h2>
          <p>Resume Name: Resume.pdf</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A esse numquam odit fugiat blanditiis minima eveniet dolorum cum iure rerum sit commodi, dicta assumenda consequuntur modi quis quas facere ut.</p>
          <p>Dated: 7/2/2026</p>
        </div>
        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend Developer</h2>
          <p>Resume Name: Resume.pdf</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A esse numquam odit fugiat blanditiis minima eveniet dolorum cum iure rerum sit commodi, dicta assumenda consequuntur modi quis quas facere ut.</p>
          <p>Dated: 7/2/2026</p>
        </div>
        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend Developer</h2>
          <p>Resume Name: Resume.pdf</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A esse numquam odit fugiat blanditiis minima eveniet dolorum cum iure rerum sit commodi, dicta assumenda consequuntur modi quis quas facere ut.</p>
          <p>Dated: 7/2/2026</p>
        </div>
      </div>
    </div>
  )
}

export default WithAuthHOC(History)