import { Outlet } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div className="App-container">
      <Outlet />
    </div>
  );
};

export default App;
