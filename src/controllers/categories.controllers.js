const CategoriesServices = require('../services/categories.services');

const getAllCategories = async (req, res, next) =>{
    try {
        const result = await CategoriesServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            message: 'No se pudieron obtener las categorias.',
            status: 400,
            errorContent: error
        })
    }
}

const createCategory = async (req, res, next) =>{
    try {
        const newCategory = req.body;
        const result = await CategoriesServices.create(newCategory);
        res.json(result);
    } catch (error) {
        next(
            {
                message: 'No se pudo crear la categoria.',
                status: 400,
                errorContent: error
            })
    }
}

const deleteCategory = async (req, res, next) =>{
    try {
        const { categoryId } = req.params;
        const result = await CategoriesServices.delete(categoryId);
        res.json(result);
    } catch (error) {
        next({
            message: 'No se pudo eliminar la categoria, tal vez seas un robot o no tengas los permisos.',
            status: 400,
            errorContent: error
        })
    }
}

module.exports = {
    getAllCategories,
    createCategory,
    deleteCategory
}