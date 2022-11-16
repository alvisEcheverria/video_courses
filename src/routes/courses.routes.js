const { Router } = require('express');
const { getAllCourses, createCourse, getCoursesWithAllData, updateCourse } = require('../controllers/courses.controllers');
const authVerification = require("../middlewares/auth.middlewares");

const router = Router();

router.get('/courses', getAllCourses);

router.get('/courses/alldata', getCoursesWithAllData);

router.post('/courses', authVerification, createCourse);

router.put('/courses/:courseId', authVerification, updateCourse)

module.exports = router;