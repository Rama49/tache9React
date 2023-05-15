// import React from "react";
import React, { useState } from "react";

const Welcome = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="h-75 w-25 align-items-center text-center mt-5 shadow">
      <h1>Bienvenu: {props.name}</h1>
      <p>Mon compteur : {count}</p>
      <div className="align-items-center">
        <button
          className="bg-white me-3 text-decoration-none"
          onClick={() => setCount(count + 1)}
        >
          Ajouter
        </button>
        <button
          className="bg-white text-decoration-none"
          onClick={() => setCount(count - 1).bind(this)}
        >
          Diminuer
        </button>
      </div>
    </div>
  );
};

export default Welcome;
