import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import UserList from "./components/UserList/UserList";
import Modal from "./components/Modal/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [isModalShown, setIsModalShown] = useState(false);
  const [modalData, setModalData] = useState({});

  const addUserHandler = (userData) => {
    if (!validateInput(userData)) return false;

    setUsers((currUsers) => {
      return [...currUsers, userData];
    });

    return true;
  };

  const removeUserHandler = (userId) => {
    const userIdx = users.findIndex((user) => user.id === userId);
    setUsers((users) => {
      const newUsers = [...users];
      newUsers.splice(userIdx, 1);
      return newUsers;
    });
  };

  const editUserHandler = (userId, newUserData) => {
    if (!validateInput(newUserData)) return false;

    const userIdx = users.findIndex((user) => user.id === userId);

    setUsers((users) => {
      const newUsers = [...users];
      newUsers[userIdx].name = newUserData.name;
      newUsers[userIdx].age = newUserData.age;
      return newUsers;
    });

    return true;
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
      setIsModalShown(true);
      setModalData(modalData);
      return false;
    }
    if (+age <= 0) {
      modalData.header = "Invalid Input";
      modalData.body = "Please enter a valid age (> 0)";
      setIsModalShown(true);
      setModalData(modalData);
      return false;
    }

    return true;
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
    setModalData({});
  };

  return (
    <div className="app-container">
      <Form onAddUser={addUserHandler} onInputValidate={validateInput} />
      {users.length !== 0 && (
        <UserList
          users={users}
          onRemoveUser={removeUserHandler}
          onEditUser={editUserHandler}
          onInputValidate={validateInput}
        />
      )}
      {isModalShown && (
        <Modal {...modalData} onCloseModal={closeModalHandler} />
      )}
    </div>
  );
}

export default App;
