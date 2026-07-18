import React from 'react'
import styles from './Sidebar.module.css'
import DocumentScannerSharpIcon from '@mui/icons-material/DocumentScannerSharp'
import DashboardCustomizeSharpIcon from '@mui/icons-material/DashboardCustomizeSharp'
import HistorySharpIcon from '@mui/icons-material/HistorySharp'
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp'
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../utils/AuthContext'

export default function Sidebar() {

    const location = useLocation()
    const navigate = useNavigate()

    const {isLogin, setIsLogin, userInfo, setUserInfo} = useContext(AuthContext)

    const handleLogout = () => {
        localStorage.clear()
        setIsLogin(false)
        setUserInfo(null)
        navigate('/')
    }

  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebarIcon}>
            <DocumentScannerSharpIcon sx={{fontSize:54, marginBottom:2}} />
            <div className={styles.sidebarTopContent}>Resume Screening</div>
        </div>

        <div className={styles.sideBarOptionsBlock}>
            <Link to={'/dashboard'} className={[styles.sidebarOption, location.pathname === '/dashboard' ? styles.selectedOption : null].join(' ')}>
                <DashboardCustomizeSharpIcon sx={{fontSize:20}} />
                <div>Dashboard</div>
            </Link>

            <Link to={'/history'} className={[styles.sidebarOption, location.pathname === '/history' ? styles.selectedOption : null].join(' ')}>
                <HistorySharpIcon sx={{fontSize:20}} />
                <div>History</div>
            </Link>

            {
                userInfo?.role === 'admin' && (
                    <Link to={'/admin'} className={[styles.sidebarOption, location.pathname === '/admin' ? styles.selectedOption : null].join(' ')}>
                        <AdminPanelSettingsSharpIcon sx={{fontSize:20}} />
                        <div>Admin</div>
                    </Link>
                )
            }

            <div onClick={handleLogout} className={styles.sidebarOption}>
                <LogoutSharpIcon sx={{fontSize:20}} />
                <div>LogOut</div>
            </div>
        </div>
    </div>
  )
}
