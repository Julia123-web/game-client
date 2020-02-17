import React from "react";

const UserForm = props => {
  // console.log(props);
  return (
    <div>
      {props.text}
      <form onSubmit={props.handleSubmit}>
        <label>Name:</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="name"
          value={props.values.name}
        />
        <label>Email:</label>
        <input
          onChange={props.handleChange}
          type="email"
          name="email"
          value={props.values.email}
        />
        <label>Password:</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="password"
          value={props.values.password}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserForm;
