import Card from "../Layout/Card";
import UserItem from "./UserItem";
import "./UserList.css";

function UserList(props) {
  let content = props.users.map((user) => {
    return (
      <UserItem
        key={user.id}
        name={user.name}
        age={user.age}
        id={user.id}
        onRemoveUser={props.onRemoveUser}
        onEditUser={props.onEditUser}
      />
    );
  });

  return <Card className="user-list">{content}</Card>;
}

export default UserList;
