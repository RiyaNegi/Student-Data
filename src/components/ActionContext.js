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

  // const edit = (id, text, parentId) => {
  //   if (parentId === undefined) {
  //     const newList = [...comments]
  //     const index = newList.findIndex((x) => x.comId === id)
  //     newList[index].text = text
  //     setComment(newList)
  //   }
  // }

  const deleteData = (id) => {
    const newStudent = students.slice()
    newStudent.filter(i => i.uid !== id)
    students = newStudent
    setStudentData(newStudent)
    console.log("new data", students)
  }

  return (
    <ActionContext.Provider
      value={{
        handleStudents: handleStudents,
        students: studentData,
        onDelete: deleteData
      }}
    >
      {children}
    </ActionContext.Provider>
  )
}
