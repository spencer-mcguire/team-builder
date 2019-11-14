import React, { useEffect } from "react";

const MemberCard = props => {
  useEffect(() => {}, []);
  return (
    <>
      {props.teamMemberList.map(list => (
        <div key={list.id} className="member-card">
          <div className="title">
            <h2>{list.name}</h2>
          </div>
          <p>{list.email}</p>
          <p>{list.role}</p>
          <button className="button" onClick={props.edit}>
            EDIT
          </button>
        </div>
      ))}
    </>
  );
};

export default MemberCard;
