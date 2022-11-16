const Users = require('./users.models');
const UsersCourses = require('./usersCourses.models');
const Courses = require('./courses.models');
const Videos = require('./videos.models');
const Categories = require('./categories.models');

const initModels = ()=>{

    Courses.belongsTo(Categories, {as: 'category', foreignKey: 'category_id'})
    Categories.hasMany(Courses, {as: 'course', foreignKey: 'category_id'})

    Videos.belongsTo(Courses, {as: 'course', foreignKey: 'course_id'})
    Courses.hasMany(Videos, {as: 'video', foreignKey: 'course_id'})

    UsersCourses.belongsTo(Users, {as: 'user', foreignKey: 'user_id'})
    Users.hasMany(UsersCourses, {as: 'user_to_courses', foreignKey: 'user_id'})

    UsersCourses.belongsTo(Courses, {as: 'course', foreignKey: 'course_id'})
    Courses.hasMany(UsersCourses, {as: 'courses_to_user', foreignKey: 'course_id'})
}

module.exports = initModels;