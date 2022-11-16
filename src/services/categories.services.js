const Categories = require("../models/categories.models");

class CategoriesServices {
    static async getAll(){
        try {
            const result = await Categories.findAll();
            return result; 
        } catch (error) {
            throw error
        }
    }

    static async create(newCategory){
        try {
            const result = await Categories.create(newCategory);
            return result;
        } catch (error) {
            throw error
        }
    }

    static async delete(categoryId){
        try {
            const result = await Categories.destroy({
                where: { id: categoryId }
            })
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = CategoriesServices;