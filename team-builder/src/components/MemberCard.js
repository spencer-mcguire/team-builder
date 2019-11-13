import React from "react";

const MemberCard = props => {
  return (
    <div>
      {props.teamMemberList.map(list => (
        <div key={list.id} className="member-card">
          <h2>{list.name}</h2>
          <p>{list.email}</p>
          <p>{list.role}</p>
          <button onClick={props.edit}>EDIT</button>
        </div>
      ))}
    </div>
  );
};

export default MemberCard;
