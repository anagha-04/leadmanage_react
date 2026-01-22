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
    }
  return (
    <div>
        <h2>Register</h2>
        <form action="">
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