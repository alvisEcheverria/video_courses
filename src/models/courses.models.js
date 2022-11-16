const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Categories = require('./categories.models');

const Courses = db.define('courses', 
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        instructor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'category_id',
            references: {
                model: Categories,
                key: 'id'
            }
        }
});

module.exports = Courses;