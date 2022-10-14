import Card from "../Layout/Card";
import UserItem from "./UserItem";
import "./UserList.css";

function UserList() {
  let content;

  return (
    <Card className="user-list">
      <UserItem name="Icek" age="32" />
      <UserItem name="Icek" age="32" />
    </Card>
  );
}

export default UserList;
