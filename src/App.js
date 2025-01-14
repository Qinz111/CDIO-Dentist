import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./Components/User/Header/Header";
import Footer from "./Components/User/Footer/Footer";

function App() {
  return (
    <div className="App-container">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-body">
        <Outlet />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
