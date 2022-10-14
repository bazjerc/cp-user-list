import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import UserList from "./components/UserList/UserList";
import Modal from "./components/Modal/Modal";

const mockUsers = [{ id: Math.random(), name: "Icek", age: 35 }];

function App() {
  const [users, setUsers] = useState(mockUsers);
  const [isModalShown, setIsModalShown] = useState(false);
  const [modalData, setModalData] = useState({});

  const addUserHandler = (userData) => {
    setUsers((currUsers) => {
      return [...currUsers, userData];
    });
  };

  const removeUserHandler = () => {
    /* const userId = props.id; */
    console.log(123);
  };

  const showModalHandler = (modalData) => {
    setIsModalShown(true);
    setModalData(modalData);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
    setModalData({});
  };

  return (
    <div className="app-container">
      <Form onAddUser={addUserHandler} onShowModal={showModalHandler} />
      {users.length !== 0 && (
        <UserList users={users} onRemoveUser={removeUserHandler} />
      )}
      {isModalShown && (
        <Modal {...modalData} onCloseModal={closeModalHandler} />
      )}
    </div>
  );
}

export default App;
