const db = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserController = {
  getAllUsers: (req, res) => {
    // Logique pour récupérer tous les utilisateurs
    db.query('SELECT * FROM user', (err, result) => {
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
    db.query('SELECT * FROM user WHERE id = ?', [userId], (err, result) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération de l\'utilisateur');
      } else {
        res.json(result);
      }

    });
  },

createUser: (req, res) => {
  const { Username, LastName, FirstName, BirthDate, Age, Address, Email, Phone, Biography, Password, Role, Gender } = req.body;

  // Convertir les valeurs de Gender
  let genderValue;
  switch (Gender) {
    case 'homme':
      genderValue = 'Male';
      break;
    case 'femme':
      genderValue = 'Female';
      break;
    case 'autre':
      genderValue = 'Other';
      break;
    default:
      genderValue = null;
  }

  // Vérification du mot de passe
  if (!Password) {
    return res.status(400).json({ error: 'Le mot de passe est requis.' });
  }

  // Vérifier si le nom d'utilisateur existe déjà
  // Vérifier si l'email existe déjà
  db.query('SELECT * FROM user WHERE Email = ?', [Email], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de la vérification de l\'email: ' + err.message });
    }

    if (result.length > 0) {
      return res.status(409).json({ error: 'Cet email est déjà utilisé.' });
    }

    // Si l'email est disponible, continuez avec la vérification du nom d'utilisateur
    db.query('SELECT * FROM user WHERE Username = ?', [Username], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la vérification du nom d\'utilisateur: ' + err.message });
      }

      if (result.length > 0) {
        return res.status(409).json({ error: 'Ce nom d\'utilisateur est déjà pris.' });
      }

    // Continuer avec l'insertion si le nom d'utilisateur est disponible
    const hashedPassword = bcrypt.hashSync(Password, 8);
    const ProfileImage = req.file ? req.file.path : null;

    const sql = `INSERT INTO user (Username, LastName, FirstName, BirthDate, Age, Address, Email, Phone, Biography, PasswordHash, Role, Gender, ProfileImage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [Username, LastName, FirstName, BirthDate, Age, Address, Email, Phone, Biography, hashedPassword, Role, genderValue, ProfileImage], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur: ' + err.message });
      } else {
        res.status(201).json({ message: 'Utilisateur créé avec succès' });
      }
    });
  });
});
},





loginUser: (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM user WHERE Email = ?';

  db.query(sql, [email], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erreur lors de la connexion: " + err.message });
    } else {
      if (result.length > 0 && bcrypt.compareSync(password, result[0].PasswordHash)) {
        const token = jwt.sign({ id: result[0].User_ID }, 'maSuperCleSecrete2023!#', {
          expiresIn: 86400 // 24 heures
        });
        res.status(200).json({ auth: true, token: token, user: result[0] });
      } else {
        res.status(401).json({ error: "Identifiants incorrects" });
      }
    }
  });
},




  updateUser: (req, res) => {
    const userId = req.params.id;
    const { first_name, last_name, birth_date, age, address, email, password, role } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    const sql = `UPDATE users SET first_name = ?, last_name = ?, birth_date = ?, age = ?, address = ?, email = ?, password_hash = ?, role = ? WHERE id = ?`;

    db.query(sql, [first_name, last_name, birth_date, age, address, email, hashedPassword, role, userId], (err, result) => {
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
