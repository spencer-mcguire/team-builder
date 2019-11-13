import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [teamMemberList, setTeamMemberList] = useState({
    name: "",
    email: "",
    role: ""
  });

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
      </header>
      <Form addNewMember={addNewMember} s s />
    </div>
  );
}

export default App;
