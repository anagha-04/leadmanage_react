import React from 'react'

function login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = axios.post("http://127.0.0.1:8000/login/",
            {
                "username": username,
                "password": password,
            }
        )
    }
    const token = response.data.token
    console.log(token)
    localStorage.setItem("token", token)
    return (
        <div>
            <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
        </div>
    )
}

export default login