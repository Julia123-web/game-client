import React from "react";
import { connect } from "react-redux";

function Rooms() {
  return (
    <div>
      <h1> Rooms </h1>
    </div>
  );
}

const mapStateToProps = state => ({ rooms: state.rooms });

export default connect(mapStateToProps)(Rooms);
