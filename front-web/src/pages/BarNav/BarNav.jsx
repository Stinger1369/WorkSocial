// BarNav.jsx
import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../../utils/AuthContext';
import './BarNav.css';

function BarNav() {
  const auth = useAuth();

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>Logo</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Accueil</Link>
        {!auth.isLoggedIn && (
          <>
            <Link to="/ConnexionScreen">Connexion</Link>
            <Link to="/InscriptionScreen">Inscription</Link>
          </>
        )}
        {auth.isLoggedIn && (
          <>
            <button type="button" onClick={auth.logout}>
              Déconnexion
            </button>
            <span>Bonjour {auth.username} !</span>
          </>
        )}
      </div>
    </div>
  );
}

export default BarNav;
