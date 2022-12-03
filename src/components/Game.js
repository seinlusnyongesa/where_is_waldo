import React, { useState } from "react";
import findwaldo from "../assets/images/findwaldo.jpg";
import GameOver from "./GameOver";
import MarkFound from "./MarkFound";
import Notification from "./Notification";
import Tagger from "./Tagger";

const Game = ({ gameData, findRemainChars }) => {
  const [pos, setPos] = useState({});
  const [showTagger, setShowTagger] = useState(false);
  const [showNofication, setShowNotification] = useState({
    show: false,
    charFound: false,
    targetName: "",
  });
  const [foundChars, setFoundChars] = useState([]);

  const isGameOver = gameData.length === 0;

  const handleTargetClick = (e) => {
    const target = e.target.getAttribute("data-name");
    const clickedTarget = gameData.find((j) => j.name === target);

    let isTarget = clickedTarget.cordinate.find(
      (j) => j.x === pos.x && j.y === pos.y
    );

    setShowNotification({
      show: true,
      charFound: !!isTarget,
      targetName: target,
    });
    if (!!isTarget) {
      setFoundChars([...foundChars, { name: target, cordinate: pos }]);
      findRemainChars(target);
    }
  };

  const handleClick = (e) => {
    setPos({
      x: Math.round(
        (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
      ),
      y: Math.round(
        (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
      ),
    });
    setShowTagger(!showTagger);
  };
  return (
    <>
      <div className="bg-gray-700 relative " onClick={handleClick}>
        <img src={findwaldo} alt="find waldo" className="pt-8 " />
        {showTagger ? (
          <Tagger
            pos={pos}
            handleTargetClick={handleTargetClick}
            gameData={gameData}
          />
        ) : (
          ""
        )}
        {showNofication.show && (
          <Notification
            setShowNotification={setShowNotification}
            showNotification={showNofication}
          />
        )}
        {foundChars.length > 0 && <MarkFound foundChars={foundChars} />}
        {isGameOver && <GameOver />}
      </div>
    </>
  );
};

export default Game;
