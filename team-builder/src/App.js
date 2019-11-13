import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MemberCard from "./components/MemberCard";

function App() {
  const [member, setMember] = useState({ name: "", email: "", role: "" });
  const [teamMemberList, setTeamMemberList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMemberList([...teamMemberList, newMember]);
  };

  const edit = member => {
    setMemberToEdit(member);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
      </header>
      <Form
        addNewMember={addNewMember}
        memberToEdit={memberToEdit}
        edit={edit}
        member={member}
        setMember={setMember}
      />
      <MemberCard teamMemberList={teamMemberList} />
    </div>
  );
}

export default App;
