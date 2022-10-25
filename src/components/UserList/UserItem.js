import { useState, useRef } from "react";
import "./UserItem.css";

function UserItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  let userInfo;
  if (isEditing) {
    userInfo = (
      <div className="user-info">
        <input
          className="user-item-input user-item-name-input"
          type="text"
          placeholder={props.name}
          ref={nameInputRef}
        />
        &nbsp;(
        <input
          className="user-item-input user-item-age-input"
          type="number"
          placeholder={props.age}
          ref={ageInputRef}
        />
        )&nbsp;
        <span>years old</span>
      </div>
    );
  } else {
    userInfo = (
      <p>
        <span className="user-name">{props.name}</span>&nbsp;
        <span className="user-age">({props.age} years old)</span>
      </p>
    );
  }

  const editHandler = () => {
    const newUserData = {
      name: nameInputRef.current.value,
      age: ageInputRef.current.value,
    };

    const isEdited = props.onEditUser(props.id, newUserData);
    setIsEditing(!isEdited);
  };

  return (
    <div className="user-item" id={props.id}>
      {userInfo}
      <div className="user-item-buttons-container">
        <button
          className="user-item-button"
          type="button"
          onClick={() => {
            isEditing ? editHandler() : setIsEditing(true);
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          className="user-item-button"
          type="button"
          onClick={() => {
            isEditing ? setIsEditing(false) : props.onRemoveUser(props.id);
          }}
        >
          {isEditing ? "Cancel" : "Remove"}
        </button>
      </div>
    </div>
  );
}

export default UserItem;
