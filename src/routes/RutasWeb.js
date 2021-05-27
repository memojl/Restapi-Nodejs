const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({"Title": "Inicio"});
});

router.get('/test', (req, res) => {
  const data = {
    "name": "Memo",
    "website": "Multiportal"
  }
  res.json(data);
});

module.exports = router;