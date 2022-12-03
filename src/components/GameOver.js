import React from "react";

const GameOver = () => {
  function refresh() {
    document.location.reload();
  }
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center"
      style={{ background: "rgba(0,0,0,.8)" }}
    >
      <div className="bg-slate-300 w-96 h-80 flex justify-center items-center flex-col rounded-md">
        <h2>game over</h2>
        <button onClick={refresh}>play again</button>
      </div>
    </div>
  );
};

export default GameOver;
