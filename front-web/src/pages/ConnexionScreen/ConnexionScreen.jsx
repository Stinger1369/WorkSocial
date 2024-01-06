import React, { useState } from 'react';
import { useAuth } from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';

import './ConnexionScreen.css';

const ConnexionScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        const firstName = data.user.first_name;
        console.log('prenom', firstName);
        auth.login(firstName);
        navigate('/');
      } else {
        console.error('Erreur lors de la connexion:', data);
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
    }
  };
  

  return (
    <div className="connexion-screen">
      <form onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <div className="form-group">
         <label htmlFor="email">Adresse Email</label>
         <input
         type="email"
         id="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default ConnexionScreen;
