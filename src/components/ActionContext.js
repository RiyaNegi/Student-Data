import React, { createContext, useEffect, useState } from 'react'


export const ActionContext = createContext()

let students = [
  {
    uid: "01",
    stuName: "Riya Negi",
    email: "abc@gmail.com",
    batch: "BE",
    city: "Pune",
    gender: "Female",
  }
]

export const ActionProvider = ({ children }) => {
  const [studentData, setStudentData] = useState(students)
  const handleStudents = (data) => {
    let newStudent = students.slice()
    newStudent.push(data)
    students = newStudent
    setStudentData(newStudent)
  }

  const edit = (id, stuName, email, batch, city, gender) => {
    let newStudent = students.slice()
    let newchange = {
      stuName: stuName,
      email: email,
      batch: batch,
      city: city,
      gender: gender,
      uid: id
    }
    let index = newStudent.findIndex(i => i.uid === id)
    newStudent[index] = newchange
    students = newStudent
    setStudentData(newStudent)
  }

  const deleteData = (id) => {
    const newStudent = students.slice()
    let newList = newStudent.filter(i => i.uid !== id)
    students = newList
    setStudentData(newList)
  }

  return (
    <ActionContext.Provider
      value={{
        handleStudents: handleStudents,
        students: studentData,
        onDelete: deleteData,
        edit: edit
      }}
    >
      {children}
    </ActionContext.Provider>
  )
}
