import React,{useState} from "react";

const Hook1 = () => {
  const state = useState();
  const [count, setCount] =useState(0);

  const IncNum = () => {
      setCount(count +1 );
    //console.log("clicked " + count++);
  };
    return (
    <>
      <h1 className="heading"> Hook Concept </h1>
      <h1 className="heading"> {count} </h1>
      <button className="button" onClick={IncNum}>Click and Count</button>
    </>
  );
};

export default Hook1;
