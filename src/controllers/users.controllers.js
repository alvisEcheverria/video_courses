const UsersServices = require('../services/users.services');
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res, next) =>{
    try {
        const result = await UsersServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            message: "No se pudieron obtener los usuarios.",
            status: 400,
            errorContent: error
          });
    }
};

const getUserById = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await UsersServices.getById(id);
        res.json(result)
    } catch (error) {
        next({
            message: "El usuario no existe.",
            status: 400,
            errorContent: error
          });
    }
};

const getUserWithCourses = async (req, res, next) =>{
    try {
        const { userId } = req.params;
        const result = await UsersServices.getUserJoinCourses(userId);
        res.json(result);
    } catch (error) {
        next({
            message: "El usuario no existe o no está inscrito en ningún curso.",
            status: 400,
            errorContent: error
          });
    }
};

const createUser = async (req, res, next) =>{
    try {
        const newUser = req.body;
        const result = await UsersServices.add(newUser)
        res.json(result);
    } catch (error) {
        next({
            message: "El usuario no se pudo crear, campos incompletos o mal estructurados.",
            status: 400,
            errorContent: error
          });
    }
};

const updateUser = async (req, res, next) =>{
    try {
        const { userId} = req.params;
        const { firstName, lastName, password } = req.body;
        const updateData = { firstName, lastName, password}
        const hash = bcrypt.hashSync(updateData.password, 10)
        updateData.password = hash;
        const result = await UsersServices.update(updateData, userId);
        res.json(result);
    } catch (error) {
        next({
            message: "No se pudo actualizar, tal vez seas un robot o no tengas los permisos.",
            status: 400,
            errorContent: error
        });
    }
};

const addCourse = async (req, res, next) =>{
    try {
        const add = req.body;
        const result = await UsersServices.addCourse(add);
        res.json(result)
    } catch (error) {
        next({
            message: "No se pudo añadir el curso.",
            status: 400,
            errorContent: error
        })
    }
}

const deleteUser = async (req, res, next) =>{
    try {
        const { userId } = req.params;
        const result = await UsersServices.delete(userId);
        res.json(result)
    } catch (error) {
        next({
            message: "No se pudo eliminar, tal vez seas un robot o no tengas los permisos.",
            status: 400,
            errorContent: error
        });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserWithCourses,
    createUser,
    updateUser,
    addCourse,
    deleteUser
}