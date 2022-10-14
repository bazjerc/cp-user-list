import Card from "../Layout/Card";
import UserItem from "./UserItem";
import "./UserList.css";

function UserList(props) {
  let content = props.users.map((user) => {
    return (
      <UserItem
        name={user.name}
        age={user.age}
        id={user.id}
        key={user.id}
        onRemoveUser={props.onRemoveUser}
      />
    );
  });

  return <Card className="user-list">{content}</Card>;
}

export default UserList;
