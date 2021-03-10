import React, { createContext, useEffect, useState } from 'react'


export const ActionContext = createContext()

let students = [
  {
    name: "Riya Negi",
    email: "abc@gmail.com",
    batch: "BE",
    gender: "Female",
  }
]

export const ActionProvider = ({ children }) => {
  const handleStudents = (data) => {
    console.log("handle student called")
    let newStudent = students.slice()
    newStudent.push(data)
    students = newStudent
    console.log("new data->", students)
  }


  return (
    <ActionContext.Provider
      value={{
        handleStudents: handleStudents,
        students: students
      }}
    >
      {children}
    </ActionContext.Provider>
  )
}
