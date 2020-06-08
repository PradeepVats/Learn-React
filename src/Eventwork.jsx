import React, { useState } from "react";

const Eventwork = () => {
  const changeColor = "green";
  const [bg, setBg] = useState(changeColor);
  const [bname, setName] = useState("Click Me");
  const bgChange = () => {
    let newBg = "#34495e";
    setBg(newBg);
    setName("Pradeep Vats 👍");
  };
  const bgBack = () => {
      setBg(changeColor);
      setName("Click Me Pradeep Vats 👍")
  };
  return (
    <>
      <div className="div" style={{ backgroundColor: bg }}>
        <button className="button" onClick={bgChange} onDoubleClick={bgBack}>
          {bname}
        </button>
      </div>
    </>
  );
};
export default Eventwork;
