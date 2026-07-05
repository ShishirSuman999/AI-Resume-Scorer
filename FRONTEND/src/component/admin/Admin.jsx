import React from 'react'
import styles from './Admin.module.css'
import Skeleton from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';

const Admin = () => {
  return (
    <div className={styles.Admin}>
      <div className={styles.AdminBlock}>

        <Skeleton variant="rectangular" width={"100%"} height={"100%"} sx={{ borderRadius: "5px" }} />

        <div className={styles.AdminCard}>
          <h2>User</h2>
          <p style={{ color: "blue "}}>By: user@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, voluptatibus! Iusto, neque possimus. Voluptatum quod amet dolores nostrum ipsum inventore in repellendus sequi magni facilis, laborum doloribus quae, explicabo eaque.</p>
        </div>
        <div className={styles.AdminCard}>
          <h2>User</h2>
          <p style={{ color: "blue "}}>By: user@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, voluptatibus! Iusto, neque possimus. Voluptatum quod amet dolores nostrum ipsum inventore in repellendus sequi magni facilis, laborum doloribus quae, explicabo eaque.</p>
        </div>
        <div className={styles.AdminCard}>
          <h2>User</h2>
          <p style={{ color: "blue "}}>By: user@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, voluptatibus! Iusto, neque possimus. Voluptatum quod amet dolores nostrum ipsum inventore in repellendus sequi magni facilis, laborum doloribus quae, explicabo eaque.</p>
        </div>
        <div className={styles.AdminCard}>
          <h2>User</h2>
          <p style={{ color: "blue "}}>By: user@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, voluptatibus! Iusto, neque possimus. Voluptatum quod amet dolores nostrum ipsum inventore in repellendus sequi magni facilis, laborum doloribus quae, explicabo eaque.</p>
        </div>
        <div className={styles.AdminCard}>
          <h2>User</h2>
          <p style={{ color: "blue "}}>By: user@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, voluptatibus! Iusto, neque possimus. Voluptatum quod amet dolores nostrum ipsum inventore in repellendus sequi magni facilis, laborum doloribus quae, explicabo eaque.</p>
        </div>
      </div>
    </div>
  )
}

export default WithAuthHOC(Admin)