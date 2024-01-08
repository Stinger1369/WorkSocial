import React from 'react';
import './UserCard.css'; // Assurez-vous de créer ce fichier CSS pour le style

const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <img src={`http://localhost:3000/${user.ProfileImage}`} alt={user.FirstName} />
            <div className="user-info">
                <h2>{user.FirstName} {user.LastName}</h2>
                <p>Age: {user.Age}</p>
                {/* <p>Genre: {user.Gender}</p>
                <p>Email: {user.Email}</p>
                <p>Adresse: {user.Address}</p>
                <p>Date de naissance: {user.BirthDate}</p> */}

            </div>
        </div>
    );
};


export default UserCard;
