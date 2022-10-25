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

  const submitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      name: enteredUsername,
      age: enteredAge,
      id: Math.random(),
    };

    if (!props.onInputValidate(newUser)) return;

    props.onAddUser(newUser);

    setEnteredUsername("");
    setEnteredAge("");
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
            value={enteredUsername}
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
            value={enteredAge}
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
