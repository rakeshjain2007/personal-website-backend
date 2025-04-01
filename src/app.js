const express = require('express');
const cors = require('cors');
const educationRoutes = require('./routes/educationRoutes');
const workExperienceRoutes = require('./routes/workExperienceRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use('/education', educationRoutes);
app.use('/work', workExperienceRoutes);

// app.use(errorMiddleware);

module.exports = app;