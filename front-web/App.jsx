// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarNav from './src/pages/BarNav/BarNav';
import ConnexionScreen from './src/pages/ConnexionScreen/ConnexionScreen';
import HomeScreen from './src/pages/HomeScreen/HomeScreen';
import InscriptionScreen from './src/pages/InscriptionScreen/InscriptionScreen';
import { AuthProvider } from './src/utils/AuthContext';

const App = () => (
  <AuthProvider>
  <Router>
    <BarNav />
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/ConnexionScreen" element={<ConnexionScreen />} />
      <Route path="/InscriptionScreen" element={<InscriptionScreen />} />
    </Routes>
  </Router>
  </AuthProvider>
);

export default App;
