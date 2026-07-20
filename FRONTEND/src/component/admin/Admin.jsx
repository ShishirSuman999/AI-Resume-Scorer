import React, { useState, useEffect } from 'react'
import styles from './Admin.module.css'
import Skeleton from '@mui/material/Skeleton'
import WithAuthHOC from '../../utils/HOC/withAuthHOC'
import axios from '../../utils/axios'

const Admin = () => {

  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const fetchAllData = async () => {
      setLoader(true)
      try {
        const results = await axios.get('/api/resume/get')
        console.log(results.data.data)
        setData(results.data.data)
      } catch (error) {
        console.log(error)
        alert("Something went wrong")
      } finally {
        setLoader(false)
      }
    }
    fetchAllData()
  }, [])

  return (
    <div className={styles.Admin}>
      <div className={styles.AdminBlock}>

        {
          loader && <>
            <Skeleton variant="rectangular" width={"100%"} height={"100%"} sx={{ borderRadius: "5px" }} />
            <Skeleton variant="rectangular" width={"100%"} height={"100%"} sx={{ borderRadius: "5px" }} />
            <Skeleton variant="rectangular" width={"100%"} height={"100%"} sx={{ borderRadius: "5px" }} />
          </>
        }

        {
          data.map((item, index) => {
            return (
              <div key={item._id} className={styles.AdminCard}>
                <h2>{item?.user?.name}</h2>
                <p style={{ color: "blue "}}>By: {item?.user?.email}</p>
                <h3>Score: {item.score}%</h3>
                <p>{item.feedback}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WithAuthHOC(Admin)