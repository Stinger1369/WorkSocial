const db = require('../config/database');

const UserController = {
  getAllUsers: (req, res) => {
    // Logique pour récupérer tous les utilisateurs
    db.query('SELECT * FROM users', (err, result) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des utilisateurs');
      } else {
        res.json(result);
      }
    });
  },

  getUserById: (req, res) => {
    const userId = req.params.id;
    // Logique pour récupérer un utilisateur par ID
    db.query('SELECT * FROM users WHERE id = ?', [userId], (err, result) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération de l\'utilisateur');
      } else {
        res.json(result);
      }
      
    });
  },

  createUser: (req, res) => {
    // Récupérez les données du formulaire depuis req.body
    const { first_name, last_name, birth_date, age, address, email, password_hash, role } = req.body;

    // Vérifiez si un fichier a été uploadé et récupérez son chemin
    const image = req.file ? req.file.path : null;

    // Votre requête SQL pour insérer les données, y compris le chemin de l'image
    const sql = `INSERT INTO users (first_name, last_name, birth_date, age, address, email, password_hash, role, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [first_name, last_name, birth_date, age, address, email, password_hash, role, image], (err, result) => {
        if (err) {
            // Si une erreur se produit, renvoyez une réponse avec le statut 500 et le message d'erreur
            res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur: ' + err.message });
        } else {
            // Si tout se passe bien, renvoyez une réponse indiquant que l'utilisateur a été créé
            res.status(201).json({ message: 'Utilisateur créé avec succès' });
        }
    });
},

  
  loginUser: (req, res) => {
    const { email, password } = req.body; // Utilisez email ou username selon votre choix
    const sql = 'SELECT * FROM users WHERE email = ? AND password_hash = ?';

    db.query(sql, [email, password], (err, result) => {
      if (err) {
        res.status(500).json({ error: "Erreur lors de la connexion: " + err.message });
      } else {
        if (result.length > 0) {
          res.status(200).json({ message: "Connexion réussie", user: result[0] });
        } else {
          res.status(401).json({ error: "Identifiants incorrects" });
        }
      }
    });
  },

  updateUser: (req, res) => {
    const userId = req.params.id;
    const { first_name, last_name, birth_date, age, address, email, password_hash, role } = req.body;
    const sql = `UPDATE users SET first_name = ?, last_name = ?, birth_date = ?, age = ?, address = ?, email = ?, password_hash = ?, role = ? WHERE id = ?`;
  
    db.query(sql, [first_name, last_name, birth_date, age, address, email, password_hash, role, userId], (err, result) => {
      if (err) {
        res.status(500).send('Erreur lors de la mise à jour de l\'utilisateur: ' + err);
      } else {
        res.status(200).send('Utilisateur mis à jour avec succès');
      }
    });
  },
  

  deleteUser: (req, res) => {
    const userId = req.params.id;
    const sql = `DELETE FROM users WHERE id = ?`;
  
    db.query(sql, [userId], (err, result) => {
      if (err) {
        res.status(500).send('Erreur lors de la suppression de l\'utilisateur: ' + err);
      } else {
        res.status(200).send('Utilisateur supprimé avec succès');
      }
    });
  },
  
};

module.exports = UserController;
