import React, { useState } from 'react';
import RouterComp from './router';
import { Routes, Route } from 'react-router-dom';
import Header from './header';
import NavBar from './navContainer';
import SignIn from './signin';

const Layout = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route
        path="/*"
        element={
          <>
            <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
            <div className="homeContainer">
              <NavBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
              <RouterComp />
            </div>
          </>
        }
      />
    </Routes>
  );
};

export default Layout;
