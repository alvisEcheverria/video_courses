const { Router } = require('express');
const   {   
            getAllUsers, 
            getUserById, 
            getUserWithCourses, 
            createUser, 
            updateUser, 
            deleteUser,
            addCourse
        } = require('../controllers/users.controllers');
const authVerification = require("../middlewares/auth.middlewares");

const router = Router();

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.get('/users/:userId/courses', getUserWithCourses);

router.post('/users', createUser);

router.post('/users/courses', authVerification, addCourse)

router.put('/users/:userId', authVerification, updateUser);

router.delete('/users/:userId', authVerification, deleteUser);

module.exports = router;