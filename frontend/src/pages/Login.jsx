import React from 'react'
import { useState, useEffect } from 'react'
import {FaSignInAlt} from 'react-icons/fa'

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const {email, password} = formData

    const onChange = (e)=>{
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    }

    const onSubmit = (e)=>{
        e.preventDefault()
    }

  return (
    <>
        <section className='heading'>
            <h1>
                <FaSignInAlt/> Login
            </h1>
            <p>Login and Start setting goals</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <input type="text" className='form-control' name="email" id="email" value={email} placeholder="Enter Your Email" onChange={onChange} />

                </div>
                <div className="form-group">
                <input type="password" className='form-control' name="password" id="password" value={password} placeholder="Enter Your Password" onChange={onChange} />
                </div>

                <div className="form-group">
                    <button type="submit" className='btn btn-block'>Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Login