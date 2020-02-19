import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const RoomForm = props => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name of the Room:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter room name"
          onChange={props.handleChange}
          value={props.values.name}
        />
        <Button type="submit" bsstyle="primary">
          submit
        </Button>
      </Form.Group>
    </Form>
  );
};
export default RoomForm;
