const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/init.models');
const handleError = require('./middlewares/error.middlewares');
const userRoutes = require('./routes/users.routes');
const courseRoutes = require('./routes/courses.routes');
const categoriesRoutes = require('./routes/categories.routes');
const videosRoutes = require('./routes/videos.routes');
const authRoutes = require("./Routes/auth.routes");
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

db.authenticate()
    .then(()=> console.log('Autenticación éxitosa'))
    .catch(error => console.log(error));

db.sync({ force: false })
    .then(()=> console.log('Base sincronizada'))
    .catch(error => console.log(error));

initModels();

app.get('/', (req, res)=>{
    res.json({ message: 'Ok'});
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', courseRoutes);
app.use('/api/v1', categoriesRoutes);
app.use('/api/v1', videosRoutes);
app.use("/api/v1", authRoutes);

app.use(handleError);

module.exports = app;