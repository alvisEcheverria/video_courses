const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const UsersCourses = require('../models/usersCourses.models');

class UsersServices {
    static async getAll(){
        try {
            const result = await Users.findAll({
                attributes: ['id', 'firstName', 'lastName', 'email']
            })
            return result;
        } catch (error) {
            throw error;   
        }
    }

    static async getById(id){
        try {
            const result = await Users.findByPk(id, {
                attributes: ['id', 'firstName', 'lastName', 'email']
            })
            return result;
        } catch (error) {
            throw error
        }
    }

    static async getUserJoinCourses(userId){
        try {
            const result = await Users.findAll({
                where: { id: userId },
                attributes: ['id', 'firstName', 'lastName', 'email'],
                include: {
                    model: UsersCourses,
                    as: 'user_to_courses',
                    attributes: ['courseId'],
                    include: {
                        model: Courses,
                        as: 'course',
                        attributes: ['title', 'description']
                    }
                }
            });
            return result;
        } catch (error) {
            throw error
        }
    }

    static async add(newUser){
        try {
            const result = await Users.create(newUser);
            return result;
        } catch (error) {
            throw error
        }
    }

    static async update(updateData, userId){
        try {
            const result = await Users.update(updateData, {
                where: { id: userId }
            });
            return result;
        } catch (error) {
            throw error
        }
    }

    static async addCourse(add){
        try {
            const result = await UsersCourses.create(add);
            return result; 
        } catch (error) {
            throw error
        }
    }

    static async delete(userId){
        try {
            const result = await Users.destroy({
                where: { id: userId}
            });
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = UsersServices;