import "./UserItem.css";

function UserItem(props) {
  return (
    <div className="user-item">
      <p>
        <span className="user-name">{props.name}</span>&nbsp;
        <span className="user-age">({props.age} years old)</span>
      </p>
      <div className="user-item-buttons-container">
        <button className="user-item-button" type="button">Edit</button>
        <button className="user-item-button" type="button">Remove</button>
      </div>
    </div>
  );
}

export default UserItem;
