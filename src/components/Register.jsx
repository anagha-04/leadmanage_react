import React from 'react'

function Register() {
    
  return (
    <div>
        <h2>Register</h2>
        <form action="">
            <input type="text" name='username' placeholder='enter username' />
            <br /><br />
            <input type="password" name='password' placeholder='enter password'/>
            <br /><br />
            <input type="email" name='email' placeholder='enter email id' />
            <br /><br />
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register