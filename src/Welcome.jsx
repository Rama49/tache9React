// import React from "react";
import React, { useState } from 'react';


const Welcome = (props) => {
    const [count, setCount]=useState(0);
    return(
        <div>
            <h1>Bienvenu: {props.name}</h1>
        <p>Mon compteur : {count}</p>
        <button onClick={() => setCount(count + 1)}>Ajouter</button>
        <button onClick={() => setCount(count - 1)}>Diminuer</button>
        </div>
    )
}

export default Welcome;