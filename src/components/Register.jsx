import axios from 'axios'
import React, { useState } from 'react'

function Register() {
    const[formdata,setFormData] = useState({
        "username":"",
        "passwprd":"",
        "email":""

    })
    const handleChange = (e) =>{
        setFormData({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const response = await axios.post("http://127.0.0.1:8000/register/",formdata)
        console.log(response.data)
    }
  return (
    <div>
        <h2>Register</h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='username' placeholder='enter username'onChange={handleChange} />
            <br /><br />
            <input type="password" name='password' placeholder='enter password' onChange={handleChange}/>
            <br /><br />
            <input type="email" name='email' placeholder='enter email id' onChange={handleChange} />
            <br /><br />
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register




