import { useState } from "react";
import Navbar from "./components/Navbar";
import PlayersPopUp from "./components/PlayersPopUp";

function App() {
  let [isPlayerPopupOpen, setIsPlayerPopupOpen] = useState(true);
  return (
    <>
      <Navbar
        setPlayerPopup={setIsPlayerPopupOpen}
        isPlayerPopupOpen={isPlayerPopupOpen}
      />
      {isPlayerPopupOpen ? <PlayersPopUp /> : ""}
    </>
  );
}

export default App;
