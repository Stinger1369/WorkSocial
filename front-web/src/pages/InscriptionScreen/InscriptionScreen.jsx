import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ConnexionScreen from '../ConnexionScreen/ConnexionScreen';

import './InscriptionScreen.css';

const InscriptionScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [image, setImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (birthDate) {
      const calculatedAge = calculateAge(birthDate);
      setAge(calculatedAge);
    }
  }, [birthDate]);

  const calculateAge = (birthDate) => {
    const birthday = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
  
    if (age < 18) {
      setErrorMessage('Vous devez avoir au moins 18 ans pour vous inscrire.');
      return;
    }
  
    const formData = new FormData();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('birth_date', birthDate);
    formData.append('age', age);
    formData.append('address', address);
    formData.append('email', email);
    formData.append('password_hash', password);
    formData.append('role', 'user');
    formData.append('gender', gender);
    formData.append('image', image); // Assurez-vous que 'image' est le fichier sélectionné
  
    try {
      const response = await fetch('http://localhost:3000/users', { 
        method: 'POST',
        body: formData // Notez qu'il n'y a pas d'en-tête Content-Type ici
      });
  
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage('Inscription réussie. Redirection vers la page de connexion...');
        setTimeout(() => navigate('/ConnexionScreen'), 3000);
      } else {
        if (data.error && data.error.includes('ER_DUP_ENTRY')) {
          setErrorMessage('Cette adresse e-mail est déjà utilisée. Veuillez en choisir une autre ou vous connecter si vous avez déjà un compte.');
        } else {
          setErrorMessage(data.error || 'Une erreur est survenue lors de l\'inscription.');
        }
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
      setErrorMessage('Une erreur est survenue lors de l\'inscription.');
    }
  };

  

  return (
    <div className="inscription-screen">
      <form onSubmit={handleSubmit}>
        <h2>Inscription</h2>
        <div className="form-group">
          <label htmlFor="image">Image de Profil</label>
           <input 
             type="file" 
             id="image" 
             onChange={e => setImage(e.target.files[0])} 
             required 
           />
         </div>
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input type="text" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>
        <div className="form-group">
         <label htmlFor="gender">Genre</label>
           <select id="gender" value={gender} onChange={e => setGender(e.target.value)}>
            <option value="">Sélectionnez un genre</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
            <option value="autre">Autre</option>
           </select>
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Date de naissance</label>
          <input type="date" id="birthDate" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adresse</label>
          <input type="text" id="address" value={address} onChange={e => setAddress(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">S'inscrire</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default InscriptionScreen;
