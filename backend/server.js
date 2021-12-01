require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const connectDB = require('./config/db');
const accessRoutes = require('./routes/accessRoutes');
const taskRoutes = require('./routes/taskRoutes');

//Initialized
connectDB();
const app = express();

//Body parsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Config
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

//Routes
app.use('/api/access', accessRoutes);
app.use('/api/task', taskRoutes);
app.use('/', (req, res) => { res.sendFile(path.join(__dirname+'/index.html')); })

//Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));