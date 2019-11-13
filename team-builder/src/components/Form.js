import React, { useState } from "react";
import "../App.css";

const Form = props => {
  const handleChange = e => {
    props.setMember({ ...props.member, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.addNewMember(props.member);
    props.setMember({ name: "", email: "", role: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={props.member.name}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChange}
          value={props.member.email}
        />
        <label htmlFor="role">Role:</label>
        <input
          id="role"
          type="text"
          name="role"
          onChange={handleChange}
          value={props.member.role}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
