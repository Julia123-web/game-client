import React, { Component } from "react";
import { connect } from "react-redux";

class ScoreContainer extends Component {
  render() {
    const scoresForLevel = this.props.scores[this.props.level];
    return (
      <div>
        <div>Current SCORE: {this.props.score}</div>
        <div>
          High Scores:
          <ul>
            {scoresForLevel.map(score => (
              <li>
                {score.username}: {score.score}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    scores: state.score
  };
};

export default connect(mapStateToProps)(ScoreContainer);
