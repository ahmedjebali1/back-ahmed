var express = require('express');
const { getAllCategorie, getCategorie, createCategorie, deleteCategorie, updateCategorie } = require('../controllers/categorie.controller');
const validate = require('../middlewares/validator');
var router = express.Router();

router.get('/', getAllCategorie);
router.get('/:catId', getCategorie);
router.post('/addcat', createCategorie);
router.put('/update/:catId',  updateCategorie);
router.delete('/delete/:catId', deleteCategorie);

module.exports = router;