import { useEffect, useState } from "react";
import Game from "./components/Game";
import Navbar from "./components/Navbar";
import PlayersPopUp from "./components/PlayersPopUp";

import data from "./data.json";

function App() {
  let [isPlayerPopupOpen, setIsPlayerPopupOpen] = useState(false);
  const [gameData, setGameData] = useState([]);
  useEffect(() => {
    setGameData(data.data);
  }, []);

  const findRemainChars = (name) => {
    const remainChars = gameData.filter((v) => v.name !== name);
    setGameData(remainChars);
  };
  return (
    <>
      <Navbar
        setPlayerPopup={setIsPlayerPopupOpen}
        isPlayerPopupOpen={isPlayerPopupOpen}
        gameData={gameData}
      />
      {isPlayerPopupOpen ? <PlayersPopUp /> : ""}
      <Game gameData={gameData} findRemainChars={findRemainChars} />
    </>
  );
}

export default App;
