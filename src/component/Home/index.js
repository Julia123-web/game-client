import React from "react";
import { connect } from "react-redux";

function Home() {
  return (
    <div>
      <h1> Welcome!</h1>
    </div>
  );
}

const mapStateToProps = state => ({ events: state.events });

export default connect(mapStateToProps)(Home);
