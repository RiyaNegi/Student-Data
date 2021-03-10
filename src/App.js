import React from "react"
import './App.css';
import { ActionProvider } from './components/ActionContext'
import Form from "./components/Form/Form"
import Table from "./components/Table/Table";


function App() {
  return (
    <ActionProvider >
      <div className="App">
        <div className="form"><Form /></div>
        <div className="table"><Table /></div>
      </div>
    </ActionProvider>
  );
}

export default App;
