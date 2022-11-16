const { Router } = require('express');
const { getAllCategories, createCategory, deleteCategory } = require('../controllers/categories.controllers');
const authVerification = require("../middlewares/auth.middlewares");

const router = Router();

router.get('/categories', getAllCategories);

router.post('/categories', authVerification, createCategory);

router.delete('/categories/:categoryId', authVerification, deleteCategory)

module.exports = router;