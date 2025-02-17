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