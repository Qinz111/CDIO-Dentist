import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";

const User = () => {
  return (
    <div className="App-container">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-body">
        <Content />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
};

export default User;
