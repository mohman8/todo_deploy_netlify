import { useState } from 'react'
import "./SignUp.css";
import user_icon from '../assets/user-solid.svg';
import email_icon from '../assets/envelope-solid.svg';
import password_icon from "../assets/lock-solid.svg"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



const SignUp = () => {
    const [active, setActive] = useState("Sign Up")
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.post('http://localhost:9000/register', { username: name, email, password })
            navigate("/")
        } catch (e) {
            console.log(e)
            setErrMsg(e?.response?.data?.error || "Error signing in")
        } finally {
            setLoading(false)
        }

    }



    return (
        <div className="app">
            <div className='container'>
                <div className='header'>
                    <div className='text'>{active}</div>
                    <div className='underline'></div>
                    <h3 style={{ "textAlign": "center" }}>{errMsg}</h3>
                </div>
                <div className="inputs">
                    <div className="input">

                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Username'
                            onChange={(e) => setName(e.target.value)}
                        />

                    </div>

                    <div className="input">

                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email Id'
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    <div className="input">

                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>


                    {/* {active === "Login" ? <div></div> : <div className="input">

                    <img src={password_icon} alt="" />
                    <input type="confirm-password" placeholder='Confirm password' />
                </div>} */}
                    <div className="input">

                        <img src={password_icon} alt="" />
                        <input type="confirm-password" placeholder='Confirm password' />
                    </div>
                </div>
                <div className="submit-container">
                    <button onClick={handleSubmit} className='submit'  >{loading ? "Loading..." : "Sign Up"}  </button>
                    <p>Already have an account? <a href='/'>Login</a></p>


                    {/* <button className='submit'>Login</button> */}
                </div>
                {/* <div className="submit-container">
                <div className={active === "Login" ? "submit gray" : "submit"} onClick={() => { setActive("Sign Up") }}>Sign Up</div>
                </div> */}
            </div>
        </div>
    )
}


export default SignUp