import React, { useState, useEffect, useContext } from 'react'
import styles from './History.module.css'
import Skeleton from '@mui/material/Skeleton'
import WithAuthHOC from '../../utils/HOC/withAuthHOC'
import axios from '../../utils/axios'
import { AuthContext } from '../../utils/AuthContext'

const History = () => {

  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)

  const { userInfo } = useContext(AuthContext)

  useEffect(() => {
    const fetchUserData = async () => {
      setLoader(true)
      try {
        const results = await axios.get(`/api/resume/get/${userInfo?._id}`)
        console.log(results.data.data)
        setData(results.data.data)
      } catch(error) {
        console.log(error)
        alert("Something went wrong")
      } finally {
        setLoader(false)
      }
    }
    fetchUserData()
  }, [])

  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>
        {loader && <>
          <Skeleton variant="rectangular" width={"100%"} height={"100%"} sx={{ borderRadius: "5px" }} />
          <Skeleton variant="rectangular" width={"100%"} height={"100%"} sx={{ borderRadius: "5px" }} />
          <Skeleton variant="rectangular" width={"100%"} height={"100%"} sx={{ borderRadius: "5px" }} />
        </>}

        {data.map((item, index) => {
          return (
            <div key={item._id} className={styles.HistoryCard}>
              <div className={styles.cardPercentage}>{item.score}%</div>
              <p>Resume Name: {item.resume_name}</p>
              <p>{item.feedback}</p>
              <p>Dated: {item.createdAt.slice(0, 10)}</p>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default WithAuthHOC(History)