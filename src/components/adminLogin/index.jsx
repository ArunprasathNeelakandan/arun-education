import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import Cookies from 'js-cookie'
import Loading from '../Loading'

import { login } from '../services/adminApi'

 

import './index.css'

const AdminLogin = () => {
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [apiStatus,setApiStatus] = useState('initiate')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setApiStatus('loading')

        const res = await login(name,password)

        if (res.result === 'success'){
            Cookies.set(import.meta.env.VITE_JWT_KEY,res.data,{expires: 1})
            setApiStatus('finish')
            navigate('/admin')
        }else {
            setApiStatus('finish')
            alert(res.msg)
        }
    }

    return(
        <>
        {apiStatus === "loading" && <Loading/> }
        <div className="admin-login-bg">
            <form onSubmit={handleSubmit}>
                <center>
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" className='logo' />
                </center>
                <div>
                    <label htmlFor="admin-name">Name</label>
                    <input type="text" className='multi-select-input' id='admin-name' onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="admin-password">Password</label>
                    <input type="text" className='multi-select-input'id='admin-password'onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
        </>
    )

}

export default AdminLogin