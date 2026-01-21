import React, { useEffect, useState } from 'react'

function Studentlist() {
  const [students,setstudents]= useState([])


  useEffect(()=>{
     fetch("http://127.0.0.1:8000/")
  })


  return (
    <div>

        <h1>Studentlist</h1>
    </div>
  )
}

export default Studentlist