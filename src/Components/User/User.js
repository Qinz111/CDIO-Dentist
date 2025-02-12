import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";
import { Outlet } from "react-router-dom";
import "./User.scss";
const User = () => {
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
};

export default User;
