const CoursesServices = require('../services/courses.services');

const getAllCourses = async (req, res, next)=>{
    try {
        const result = await CoursesServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            message: "No se pudieron obtener todos los cursos.",
            status: 400,
            errorContent: error
        });
    }
}

const getCoursesWithAllData = async (req, res, next) =>{
    try {
        const result =  await CoursesServices.getAllDataCourses()
        res.json(result);
    } catch (error) {
        next({
            message: "No se pudieron obtener todos los cursos, ni sus categorias y vídeos.",
            status: 400,
            errorContent: error
        })
    }
}

const createCourse = async (req, res, next)=>{
    try {
        const newCourse = req.body;
        const result = await CoursesServices.create(newCourse);
        res.json(result);
    } catch (error) {
        next({
            message: "No se pudo crear el nuevo curso.",
            status: 400,
            errorContent: error
        })
    }
}

const updateCourse = async (req, res, next) =>{
    try {
        const { courseId} = req.params;
        const { description } = req.body;
        const result = await CoursesServices.update({ description }, courseId);
        res.json(result);
    } catch (error) {
        next({
            message: "No se pudo actualizar, tal vez seas un robot o no tengas los permisos.",
            status: 400,
            errorContent: error
        });
    }
};

module.exports = { 
    getAllCourses,
    getCoursesWithAllData,
    createCourse,
    updateCourse
};

