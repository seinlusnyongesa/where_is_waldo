import React from "react";

const MarkFound = ({ foundChars }) => {
  return (
    <>
      {foundChars.map((p, i) => (
        <p
          key={i}
          className={`absolute bg-yellow-900 text-white rounded-sm w-10 `}
          style={{ top: `${p.cordinate.y}%`, left: `${p.cordinate.x}%` }}
        >
          {p.name}
        </p>
      ))}
    </>
  );
};

export default MarkFound;
