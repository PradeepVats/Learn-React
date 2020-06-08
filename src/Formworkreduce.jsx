import React, { useState } from "react";

const Formworkreduce = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const inputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;
    const { value, name } = event.target;

    setFullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value,
      //   };
      // }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <div className="div">
            <h1 className="heading">
              Hello {fullName.fname}
              {fullName.lname}
            </h1>
            <p>
              {fullName.email}
              {fullName.phone}
            </p>

            <input
              className=" input"
              type="text"
              placeholder=" Enter Your First Name"
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br />
            <input
              className=" input"
              type="text"
              placeholder=" Enter Your Last Name"
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <input
              className="input"
              type="email"
              placeholder=" Enter Your Email Id"
              name="email"
              onChange={inputEvent}
              value={fullName.email}
            />
            <input
              className="input"
              type="number"
              placeholder=" Enter Your Mobile Number"
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
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

export default Formworkreduce;
