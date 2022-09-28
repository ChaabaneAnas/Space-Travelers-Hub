import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import RocketPage from './pages/RocketPage';
import MissionsPage from './pages/MissionPage';
import MyProfile from './Components/MyProfile';

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<RocketPage />} />
      <Route path="/Missions" element={<MissionsPage />} />
      <Route path="/MyProfile" element={<MyProfile />} />
    </Routes>
  </>
);

export default App;
