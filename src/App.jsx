import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import "./styles/App.css";
import VRApp from "./VRApp";
import LoginDialog from "./components/LoginDialog";
import { getUser } from "./store/auth/actions";
import { clickWelcome } from "./store/navigation";

function App() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUser());
    if (authState.accessToken) dispatch(clickWelcome());
  }, []);

  return (
    <div className="app">
      {authState.accessToken ? null : <LoginDialog />}
      <VRApp />
    </div>
  );
}

export default App;
