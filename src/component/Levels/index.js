import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

export default class Levels extends Component {
  render() {
    return (
      <ButtonGroup>
        <Button
          variant="info"
          size="lg"
          align-items="center"
          block
          href="/games/easy"
        >
          EASY
        </Button>
        <Button
          variant="info"
          size="lg"
          align-items="center"
          block
          href="/games/medium"
        >
          MEDIUM
        </Button>
        <Button
          variant="info"
          size="lg"
          align-items="center"
          block
          href="/games/difficult"
        >
          DIFFICULT
        </Button>
      </ButtonGroup>
    );
  }
}
