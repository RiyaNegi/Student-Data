import React, { createContext, useEffect, useState } from 'react'


export const ActionContext = createContext()

let students = [
  {
    uid: "01",
    name: "Riya Negi",
    email: "abc@gmail.com",
    batch: "BE",
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

  return (
    <ActionContext.Provider
      value={{
        handleStudents: handleStudents,
        students: studentData
      }}
    >
      {children}
    </ActionContext.Provider>
  )
}
