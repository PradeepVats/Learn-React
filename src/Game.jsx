import React from "react";

const SlotM = (props) => {
let x = props.x;
let y = props.y;
let z = props.z;

  if (x === y && y === z) {
    return (
      <>
        <div>
          <h1 className="heading">
            {x} {y} {z}
          </h1>
          <h1 className="text"> This is Matching. </h1>
        </div>
      </>
    );
  } else {
    return (
        <>
          <div>
            <h1 className="heading">
              {x} {y} {z}
            </h1>
            <h1 className="text"> This is Not Matching. </h1>
          </div>
        </>
      );  }
};

const Game = () => {
  return (
    <>
      <h1 className="heading">
        {" "}
        🎰 Welcome to <span> Slot Machine Game </span> 🎰{" "}
      </h1>
      <SlotM x='😃' y='😃' z='😃'/>
      <SlotM x='😃' y='😈' z='😈'/>
      <SlotM x='😈' y ='😈' z='😈'/>
      <SlotM x='😃' y='😈' z='😃'/>
    </>
  );
};

export default Game;
