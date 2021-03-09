import React, { createContext, useEffect, useState } from 'react'


export const ActionContext = createContext()

export const ActionProvider = ({ children }) => {
  const [replies, setReplies] = useState([])

  return (
    <ActionContext.Provider
      value={{}}
    >
      {children}
    </ActionContext.Provider>
  )
}
