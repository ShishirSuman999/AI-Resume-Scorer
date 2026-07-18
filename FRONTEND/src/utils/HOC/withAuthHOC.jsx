import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'


const WithAuthHOC = (WrappedComponent) => {

    return (props) => {
        const navigate = useNavigate()
        const {setIsLogin} = useContext(AuthContext)

        useEffect(() => {
            const isLogin = localStorage.getItem('isLogin')
            if (!isLogin) {
                setIsLogin(false)
                navigate('/')
                return
            }
        }, [navigate])

        return <WrappedComponent {...props} />
    }
}

export default WithAuthHOC