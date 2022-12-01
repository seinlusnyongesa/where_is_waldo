import React, { useState } from "react";
import findwaldo from "../assets/images/findwaldo.jpg";
import Notification from "./Notification";
import Tagger from "./Tagger";

const Game = () => {
  const [pos, setPos] = useState({});
  const [showTagger, setShowTagger] = useState(true);
  const [showNofication, setShowNotification] = useState({
    show: true,
    charFound: false,
  });

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
        {showTagger ? <Tagger pos={pos} /> : ""}
        {showNofication.show && (
          <Notification
            setShowNotification={setShowNotification}
            showNotification={showNofication}
          />
        )}
      </div>
    </>
  );
};

export default Game;
