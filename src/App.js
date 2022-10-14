import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div className="app-container">
      <Form />
      <UserList />
    </div>
  );
}

export default App;
