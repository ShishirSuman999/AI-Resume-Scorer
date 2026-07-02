import React from 'react'
import styles from './Sidebar.module.css'
import DocumentScannerSharpIcon from '@mui/icons-material/DocumentScannerSharp';
import DashboardCustomizeSharpIcon from '@mui/icons-material/DashboardCustomizeSharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {

    const location = useLocation();
    console.log(location);

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

            <Link to={'/admin'} className={[styles.sidebarOption, location.pathname === '/admin' ? styles.selectedOption : null].join(' ')}>
                <AdminPanelSettingsSharpIcon sx={{fontSize:20}} />
                <div>Admin</div>
            </Link>

            <div className={styles.sidebarOption}>
                <LogoutSharpIcon sx={{fontSize:20}} />
                <div>LogOut</div>
            </div>
        </div>
    </div>
  )
}
