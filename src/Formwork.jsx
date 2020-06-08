import React, { useState } from "react";

const Formwork = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState();
  const [lastNameNew, setLastNameNew] = useState();
  const [fullName, setFullName] = useState();
  const onSubmit = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastName);
  };

  const inputEvent = (event) => {
    //console.log(event.target.value);
    setName(event.target.value);
  };
  const inputEvent2 = (event) => {
    //console.log(event.target.value);
    setLastName(event.target.value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <div className="div">
            <h1 className="heading">
              Hello {fullName} {lastNameNew}
            </h1>
            <input
              className=" input"
              type="text"
              placeholder=" Enter Your Name"
              onChange={inputEvent}
              value={name}
            />
            <br />
            <input
              className=" input"
              type="text"
              placeholder=" Enter Your LastName"
              onChange={inputEvent2}
              value={lastName}
            />
            <button className="button" type="submit">
              Click Me
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Formwork;
