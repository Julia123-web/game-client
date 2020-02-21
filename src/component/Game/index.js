import React, { useState, useEffect } from "react";
import Board from "../Board";
import Score from "../Score";
import initializeDeck from "../../deck";
import { postScore } from "../../actions/score";
import { connect } from "react-redux";

function Game(props) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);

  const nrToLevel = {
    easy: 1,
    medium: 2,
    difficult: 3
  };

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    preloadImages();
  }, cards);

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);

    return () => window.removeEventListener("resize", resizeListener);
  });

  const handleClick = id => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        if (solved.length === 14) {
          console.log("I WON!");
          props.dispatch(postScore(score, nrToLevel[props.match.params.level]));
        }
        setScore(score + 10);
        resetCards();
      } else {
        setScore(score - 1);
        setTimeout(resetCards, 900);
      }
    }
  };

  const preloadImages = () => {
    const level = props.match.params.level;
    cards.map(card => {
      const src = `/img/${level}/${card.type}.jpg`;
      new Image().src = src;
    });
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = id => flipped.includes(id);

  const isMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };
  if (!cards) {
    return null;
  }
  console.log(props.match.params);
  return (
    <div>
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
        level={props.match.params.level}
      />

      <Score score={score} level={nrToLevel[props.match.params.level]} />
    </div>
  );
}

export default connect()(Game);
