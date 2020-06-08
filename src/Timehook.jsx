import React, { useState } from "react";

const Timehook = () => {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);
  const UpdateTime =() => {
      newTime = new Date().toLocaleTimeString();
      setCtime(newTime);
  }
  setInterval(UpdateTime,1000)
  return (
    <>
      <h1 className="heading"> Time </h1>
      <h1 className="heading"> {ctime} </h1>
      {/* <button className="button"onClick={UpdateTime}> Get Time </button> */}
    </>
  );
};

export default Timehook;
