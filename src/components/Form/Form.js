import { useState } from "react";
import "./Form.css";

import Card from "../Layout/Card";

function Form(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;

    switch (inputName) {
      case "username":
        setEnteredUsername(value);
        break;
      case "age":
        setEnteredAge(value);
        break;
    }
  };

  const validateInput = (userData) => {
    const name = userData.name;
    const age = userData.age;

    const modalData = {
      header: "",
      body: "",
    };

    if (!name.length || !age.length) {
      modalData.header = "Empty Input";
      modalData.body =
        "Please enter a valid username and age (non-empty values)";
      props.onShowModal(modalData);
      return false;
    }
    if (+age <= 0) {
      modalData.header = "Invalid Input";
      modalData.body = "Please enter a valid age (> 0)";
      props.onShowModal(modalData);
      return false;
    }

    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      name: enteredUsername,
      age: enteredAge,
      id: Math.random(),
    };

    if (!validateInput(newUser)) return;

    props.onAddUser(newUser);
  };

  return (
    <Card className={"user-form-container"}>
      <form className="user-form" onSubmit={submitHandler}>
        <div className="input-wrapper">
          <label className="input-label" htmlFor="username-input">
            Username
          </label>
          <input
            className="input"
            name="username"
            id="username-input"
            type="text"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="input-wrapper">
          <label className="input-label" htmlFor="age-input">
            Age
          </label>
          <input
            className="input"
            name="age"
            id="age-input"
            type="number"
            step="1"
            onChange={inputChangeHandler}
          />
        </div>
        <button className="submit-button" type="submit">
          Add user
        </button>
      </form>
    </Card>
  );
}

export default Form;
