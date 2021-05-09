import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useSelector } from "react-redux";
import "./styles/App.css";
import VRApp from "./VRApp";
import LoginDialog from "./components/LoginDialog";

function App() {
  const authState = useSelector((state) => state.auth);

  console.log(authState);

  return (
    <div className="app">
      {authState.email ? <div /> : <LoginDialog />}
      <VRApp />
    </div>
  );
}

export default App;
