import React, { useState } from "react";
import "../App.css";

const Form = props => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  return (
    <div className="form-container">
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" />
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" name="email" />
        <label htmlFor="role">Role:</label>
        <input id="role" type="text" name="role" />
      </form>
    </div>
  );

  const handleChange = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.addNewMember(member);
  };
};

export default Form;
