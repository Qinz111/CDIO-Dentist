import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/admin/Homepage/Homepage';
import Header from './components/admin/header/Header';
import Consultants from './components/admin/Account/ManageAccount/Consultants/Consultants';
import Doctors from './components/admin/Account/ManageAccount/Doctors/Doctors';

// Layout cho các trang thông thường (có Header)


const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* Trang Homepage không có Header */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route element = {<Header />} >         
          <Route path="/consultants" element={<Consultants />} />
          <Route path="/doctors" element={<Doctors />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// /import React from 'react';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import Homepage from './components/admin/Homepage/Homepage';
// import Header from './components/admin/header/Header';
// import ShowInformation from './components/admin/ShowInformation/ShowInformation';
// import AddEmployees from './components/admin/AddEmployees/AddEmployees';
// import Adjust from './components/admin/ModelAdjust/Adjust';
// import ManageAccount from './components/admin/Account/ManageAccount/ManageAccount';
// import Consultants from './components/admin/Account/ManageAccount/Consultants/Consultants';
// import Doctors from './components/admin/Account/ManageAccount/Doctors/Doctors';

// function App() {
//   const location = useLocation(); // Lấy đường dẫn hiện tại

//   // Kiểm tra nếu đường dẫn là "/" hoặc "/Homepage" thì không hiển thị Header
//   const showHeader = !['/', '/Homepage'].includes(location.pathname);

//   return (
//     <div className="App">
//       {showHeader && <Header />} {/* Chỉ hiển thị Header nếu showHeader là true */}
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/Homepage" element={<Homepage />} />
//         <Route path="/show-information" element={<ShowInformation />} />
//         <Route path="/add-employees" element={<AddEmployees />} />
//         <Route path="/adjust" element={<Adjust />} />
//         <Route path="/manage-account" element={<ManageAccount />} />
//         <Route path="/consultants" element={<Consultants />} />
//         <Route path="/doctors" element={<Doctors />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;