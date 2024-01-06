const mysql = require('mysql');
const config = require('./config');

const db = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
});

db.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données: ' + err.stack);
    return;
  }
  console.log('Connecté à la base de données MySQL avec l\'ID ' + db.threadId);
});

module.exports = db;
