import React, { useState } from 'react'
import "./register.css"
import { Link } from 'react-router-dom/dist'
import axios from "axios"
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const RegisterPage = () => {

    const [values, setValues] = useState({
        fname:'',
        email:'',
        mobile:'',
        pass:'',
        cpass:''
    })

    const handleChange =(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    const {fname, email, mobile, pass, cpass} = values

    const registerUser = async(e)=>{
        e.preventDefault()
        if(fname.trim() ==='' || email.trim() === '' || mobile.trim() === '' || pass.trim() === '' || cpass.trim() === ''){
            toast.warning("Fields can not be empty!")
        }else if(pass.length <= 5){
            toast.warning("Password too short!")
        }else if(pass !== cpass){
            toast.warning("Password does not match!")
        }else{
            const {data} = await axios.post(`http://localhost:8000/signup/user`,{fname,email,mobile, pass})
            if(data.status === false){
                toast.error(data.msg)
            }else{
                toast.success(data.msg)
            }
        }
    }


  return (
    <section>
        <div className='regContainer'>

            <form className='regFormContainer' onSubmit={registerUser}>
                    <ToastContainer position='top-right' theme='colored' />
                <div className='regInputContainer'>
                    <h2>Sign up</h2>
                </div>
                <div className='regInputContainer'>
                    <input type='text' name='fname' onChange={handleChange} className='regInput' placeholder='Full name'/>
                </div>
                <div className='regInputContainer'>
                    <input type='email' name='email' onChange={handleChange} className='regInput' placeholder='email'/>
                </div>
                <div className='regInputContainer'>
                    <input type='tel' name='mobile' onChange={handleChange} className='regInput' placeholder='Mobile No.'/>
                </div>
                <div className='regInputContainer'>
                    <input type='password' name='pass' onChange={handleChange} className='regInput' placeholder='Password'/>
                </div>
                <div className='regInputContainer'>
                    <input type='password' name='cpass' onChange={handleChange} className='regInput' placeholder='Confirm Password'/>
                </div>

                <div className='regInputContainer'>
                    <input type='submit' className='regBtn' value='Register'/>
                </div>

                <div className='regInputContainer'>
                    <span>Already have an account?  
                     <Link to={"/login"}> Login</Link> 
                    </span>
                </div>

            </form>

        </div>
    </section>
  )
}

export default RegisterPage