import { useContext } from 'react'
import styles from './Login.module.css'
import VpnKeySharpIcon from '@mui/icons-material/VpnKeySharp'
import GoogleIcon from '@mui/icons-material/Google'
import { auth, provider } from '../../utils/Firebase'
import { signInWithPopup } from 'firebase/auth'
import { AuthContext } from '../../utils/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from '../../utils/axios'

export default function Login() {

  const {userInfo, setUserInfo, isLogin, setIsLogin} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = async() => {
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      const userData = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      }

      await axios.post('/api/user', userData).then((response) => {
        setUserInfo(response.data.user)
        localStorage.setItem('userInfo', JSON.stringify(response.data.user))
      }).catch((error) => {
        console.log(error)
      })

      setIsLogin(true)
      localStorage.setItem('isLogin', true)
      
      navigate('/dashboard')
    } catch (error) {
      alert("Login failed. Please try again.")
      console.log(error)
    }
  }

  return (
    <div className={styles.Login}>
      <div className={styles.loginCard}>
        <div className={styles.loginCardTitle}>
          <h1>Login</h1>
          <VpnKeySharpIcon />
        </div>
        <div className={styles.googleBtn} onClick={handleLogin}>
          <GoogleIcon sx={{ fontSize: 20, color: "red" }} /> Sign in with Google
        </div>
      </div>
    </div>
  )
}
