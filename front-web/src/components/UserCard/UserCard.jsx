import React from 'react';
import './UserCard.css'; // Assurez-vous de créer ce fichier CSS pour le style

const UserCard = ({ user }) => {
    return (
        <div className="user-card">
               {user.image && <img src={`http://localhost:3000/${user.image}`} alt={user.first_name} />}
            <div className="user-info">
                <h2>{user.first_name} {user.last_name}</h2>
                <p>Age: {user.age}</p>
                <p>Genre: {user.gender}</p>
            </div>
        </div>
    );
};


export default UserCard;
