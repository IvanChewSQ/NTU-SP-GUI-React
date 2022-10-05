import React from 'react'

import "./App.css";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Dashboard, DataAnalytics, Help, Housekeeping, MainMenu, MaterialTest, PDCTest } from './pages';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Sidebar />
          <Routes>
            <Route path="/" exact component = {(<MainMenu />)} />
            <Route path="/dashboard" component = {(<Dashboard />)} />
            <Route path="/dataAnalytics" component = {(<DataAnalytics />)} />
            <Route path="/pdcTest" component = {(<PDCTest />)} />
            <Route path="/materialTest" component = {(<MaterialTest />)} />
            <Route path="/housekeeping" component = {(<Housekeeping />)} />
            <Route path="/help" component = {(<Help />)} />
          </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App