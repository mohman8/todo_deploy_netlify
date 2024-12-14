import { useState } from 'react'
import "./Login.css"

import user_icon from '../assets/user-solid.svg';
import password_icon from "../assets/lock-solid.svg";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.post('http://localhost:9000/login', { username: name, password })
            navigate("/tasks")
        } catch (e) {
            console.log(e)
            setErrMsg(e?.response?.data?.error || "Error signing in")
        } finally {
            setLoading(false)
        }

    }


    return (
        <div className='container2'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className='underline'></div>
                <h3 style={{ "textAlign": "center" }}>{errMsg}</h3>
            </div>
            <div className="inputs2">
                <div className="input">

                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Username'
                        onChange={(e) => setName(e.target.value)}
                    />

                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>
                <div className="submit-container">
                    {/* <button className='submit'>Sign Up</button> */}
                    {/* <p>Already have an account</p> */}


                    <button className='submit' onClick={handleSubmit}>{loading ? "loading..." : "Login"}</button>
                    <p>Dont have an account? <a href='/SignUp'>Sign Up</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login