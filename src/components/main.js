import { h } from "preact";
import { useSelector } from "react-redux";
import LoginDialog from "./loginDialog";
import VRApp from "./vrapp";

const Main = () => {
  const authState = useSelector((state) => state.auth);
  return (
    <div>
      {authState.email ? <div /> : <LoginDialog />}
      <VRApp />
    </div>
  );
};

export default Main;
