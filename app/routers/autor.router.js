const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autor.controller.js');

router.post('/create', autorController.create);
router.get('/all', autorController.findAll);
router.get('/onebyid/:id', autorController.findOne);
router.put('/update/:id', autorController.update);
router.delete('/delete/:id', autorController.delete);

module.exports = router;
