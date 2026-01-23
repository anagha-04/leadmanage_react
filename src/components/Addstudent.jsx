import React, { useState } from 'react'

function Addstudent() {

    const [student_name, setStudentName] = useState("")
    const [Qualification, setQualification] = useState("")
    const [source, setSource] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const token = localStorage.getItem("token")

        fetch("http://127.0.0.1:8000/add/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringfy({
                student_name,
                Qualification,
                source

            })
        })
            .then(res => res.json())
            .then(data => {
                alert("student created successfully")
                setStudentName("")
                setQualification("")
                setSource("friend")

            })
    }

    return (
        <div>
            <h2>Create Student</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder='Student Name'
                    value={student_name}
                    onChange={(e) => setStudentName(e.target.value)}
                />

                <input placeholder='Qualification'
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                />

                <select value={source} onChange={(e) => setSource(e.target, value)}>
                    <option value="friend">Friend</option>
                    <option value="instagram">Instagram</option>
                    <option value="own">Own</option>
                </select>

                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default Addstudent