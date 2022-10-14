import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import UserList from "./components/UserList/UserList";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div className="app-container">
      <Form />
      <UserList />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
