import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Sidebar } from './components';
import { Dashboard, DataAnalytics, Help, Housekeeping, MainMenu, MaterialTest, PDCTest } from './pages';
import './App.css';

// import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu } = useStateContext();

  return (
      <BrowserRouter>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Sidebar />
            </div>
            <div>

              <Routes>
                <Route path="/" element={(<MainMenu />)} />
                <Route path="/dashboard" element={(<Dashboard />)} />
                <Route path="/dataAnalytics" element={(<DataAnalytics />)} />
                <Route path="/pdcTest" element={(<PDCTest />)} />
                <Route path="/materialTest" element={(<MaterialTest />)} />
                <Route path="/housekeeping" element={(<Housekeeping />)} />
                <Route path="/help" element={(<Help />)} />
              </Routes>
            </div>
          </div>
      </BrowserRouter>
  );
};

export default App;