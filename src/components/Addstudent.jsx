import React, { useState } from 'react'

function Addstudent() {

    const[student_name,setStudentName] = useState("")
    const[Qualification,setQualification] = useState("")
    const[ source,setSource] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()

        const token = localStorage.getItem("token")

        fetch("http://127.0.0.1:8000/add/",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringfy({

            })
        })
    }

  return (
    <div>Addstudent</div>
  )
}

export default Addstudent