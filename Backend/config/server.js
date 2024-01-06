const express = require('express');
const app = require('../app'); 

const startServer = (port) => {
  // Configuration pour servir les fichiers statiques du dossier 'uploads'
  app.use('/uploads', express.static('uploads'));

  // Démarrer le serveur
  app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
  });
};

module.exports = startServer;
