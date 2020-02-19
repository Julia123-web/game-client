import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const UserForm = props => {
  const isLogin = props.isLogin;
  return (
    <div>
      {props.text}
      <Form onSubmit={props.handleSubmit}>
        {!isLogin && (
          <>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={props.handleChange}
                value={props.values.name}
              />
            </Form.Group>
          </>
        )}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={props.handleChange}
            value={props.values.email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="password"
            placeholder="Password"
            onChange={props.handleChange}
            value={props.values.password}
          />
          <Button type="submit" bsstyle="primary">
            submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserForm;
