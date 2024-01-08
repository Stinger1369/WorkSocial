import React, { useEffect, useState } from 'react';
import './HomeScreen.css';
import UserCard from '../../components/UserCard/UserCard';

const HomeScreen = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const tokenJWT = localStorage.getItem('jwtToken'); // Récupérez le token JWT du local storage
                const response = await fetch('http://localhost:3000/users', {
                    headers: {
                        'Authorization': `Bearer ${tokenJWT}` // Utilisez le token JWT dans l'en-tête de la requête
                    }
                });
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des utilisateurs');
                }
                const data = await response.json();
                console.log('data', data);
                setUsers(data);
            } catch (error) {
                console.error('Erreur:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="home-screen">
            <div className="home-screen-content">
                <h1>Home Screen</h1>
                <p>Page d'accueil</p>
                <div className="user-list">
                    {users.map((user) => (
                        <UserCard key={user.User_ID} user={user} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
