import { Outlet } from "react-router-dom";
import "./App.scss";
import Loginpage from "./Components/Consultant/Body/LoginPage/Loginpage";

const App = () => {
  return (
    <div className="App-container">
      <Loginpage />
    </div>
  );
};

export default App;
