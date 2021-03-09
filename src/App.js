import React from "react"
import './App.css';
import { ActionProvider } from './components/ActionContext'


function App() {
  return (
    <ActionProvider >
      <div className="App">
        Student Data
      </div>
    </ActionProvider>
  );
}

export default App;
