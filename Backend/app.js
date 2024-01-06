const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/UserRouter');
const multer = require('multer');

// Configurez CORS pour accepter les requêtes de votre domaine frontend
app.use(cors({
  origin: 'http://localhost:5173' 
}));

app.use(express.json());
app.use('/users', userRouter);

app.get('/test', (req, res) => {
  res.send('Le serveur fonctionne correctement.');
});
// Configuration du stockage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });
module.exports = app;
