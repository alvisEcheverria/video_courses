const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");

class CoursesServices {

    static async getAll(){
        try {
            const result = await Courses.findAll({
                attributes: ['id', 'title', 'description', 'instructor']
            });
            return result; 
        } catch (error) {
            throw error
        }
    }

    static async getAllDataCourses(){
        try {
            const result = await Categories.findAll({
                attributes: ['name'],
                include: {
                    model: Courses,
                    as: 'course',
                    attributes: ['id', 'title', 'description', 'instructor'],
                    include: {
                        model: Videos,
                        as: 'video',
                        attributes: ['title', 'url'],
                    }
                }
            });
            return result
        } catch (error) {
            throw error
        }
    }

    static async create(newCourse){
        try {
            const result = await Courses.create(newCourse);
            return result;
        } catch (error) {
            throw error
        }
    }

    static async update(updateData, courseId){
        try {
            const result = await Courses.update(updateData, {
                where: { id: courseId }
            });
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = CoursesServices;