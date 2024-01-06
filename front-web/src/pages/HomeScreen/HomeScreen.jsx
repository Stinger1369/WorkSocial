import React, { useEffect, useState } from 'react';
import './HomeScreen.css';
import { Link } from 'react-router-dom';
import UserCard from '../../components/UserCard/UserCard';

const HomeScreen = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/users');
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des utilisateurs');
                }
                const data = await response.json();
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
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;