import React, { useEffect, useState } from 'react'

function Studentlist() {
  const [students,setstudents]= useState([])


  useEffect(()=>{
     const token =localStorage.getItem("token")

     if(!token){
      console.error("no token found")
      return
     }
     
     fetch("http://127.0.0.1:8000/add/")
     .then((res) => res.json())
     .then((data)=> setstudents(data))
     .catch((err) => console.error(err))

  },[])


  return (
    <div>

        <h1>Studentlist</h1>
        <p>Total Length: {students.length}</p>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.student_name} - {student.source} -{student.Qualification}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Studentlist