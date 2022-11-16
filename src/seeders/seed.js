const Categories = require('../models/categories.models');
const Courses = require('../models/courses.models');
const initModels = require('../models/init.models');
const Users = require('../models/users.models');
const UsersCourses = require('../models/usersCourses.models');
const Videos = require('../models/videos.models');
const db = require('../utils/database');

initModels();

const users =   [
                    {
                        firstName: 'Alvis', 
                        lastName: 'Echeverria', 
                        email: 'alvis@gmail.com', 
                        password: '12345'
                    },
                    {
                        firstName: 'Adriana', 
                        lastName: 'Diaz', 
                        email: 'adriana@gmail.com', 
                        password: '12345'
                    }
                ];

const categories =  [
                        {
                            name: 'Desarrollo web'
                        },
                        {
                            name: 'Diseño gráfico'
                        },
                        {
                            name: 'Peluquería'
                        },
                        {
                            name: 'Carpintería'
                        }
                    ];

const courses = [
                    {
                        title: 'Node Js', 
                        description: 'Se aprenderán varias tecnologias para hacer un backend sofisticado', 
                        instructor: 'Ian Rosas',
                        categoryId: 1,
                    },
                    {
                        title: 'Corte ingles', 
                        description: 'Se aprenderán todos los degrafilados existentes', 
                        instructor: 'Lupita Ferrer',
                        categoryId: 3,
                    }
                ];

const videos =  [
                    {
                        title: 'Sequelize',
                        url: 'http://sequelize.org/video',
                        courseId: 1
                    },
                    {
                        title: 'Degrafilado ingles',
                        url: 'http:://degrafiladoingles.org/video',
                        courseId: 2
                    }
                ];

const usersCourses =    [
                            {
                                userId: 1,
                                courseId: 1
                            },
                            {
                                userId: 2,
                                courseId: 2
                            }
                        ];


db.sync({force: true})
    .then(async ()=> {
        console.log('Plantación éxitosa')
    
    users.forEach(user => Users.create(user));

    setTimeout(()=>{
        categories.forEach(category => Categories.create(category))
    }, 100);
    setTimeout(()=>{
        courses.forEach(course => Courses.create(course))
    }, 200);
    setTimeout(()=>{
        videos.forEach(video => Videos.create(video))
    }, 300);
    setTimeout(()=>{
        usersCourses.forEach(userCourse => UsersCourses.create(userCourse))
    }, 400); 
})
