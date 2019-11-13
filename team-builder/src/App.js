import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MemberCard from "./components/MemberCard";

function App() {
  const [teamMemberList, setTeamMemberList] = useState([]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMemberList([...teamMemberList, newMember]);
  };
  console.log(teamMemberList);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
      </header>
      <Form addNewMember={addNewMember} />
      <MemberCard teamMemberList={teamMemberList} />
    </div>
  );
}

export default App;
