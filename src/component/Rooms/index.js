import React, { Component } from "react";
import { connect } from "react-redux";
import RoomForm from "../RoomForm";
import { room } from "../../actions/room";
import { ButtonGroup, Button } from "react-bootstrap";

class CreateRoom extends Component {
  state = {
    rooms: [],
    name: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.dispatch(room(this.state.name));
    this.setState({ name: "" });
  };

  render() {
    // console.log("render state test:", this.state);
    const buttons = this.props.rooms.map(room => (
      <ButtonGroup>
        <Button
          key={room.props}
          variant="info"
          size="lg"
          align-items="center"
          block
          onClick={() => this.pick(room.roomName, room.id)}
        >
          {room.roomName}
        </Button>
      </ButtonGroup>
    ));

    // const game = this.props.rooms.find(
    //   room => room.roomName === this.state.room
    // );

    return (
      <div>
        <RoomForm
          text={""}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
        {/* {game} */}
        {buttons}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rooms: state.room.rooms
  };
};

export default connect(mapStateToProps)(CreateRoom);
