const express = require('express');
const app = express();
const questionRouter = require('./route/QuestionRoutes');

const router = express.Router();

app.use('/questions', questionRouter);

app.listen(8080, () => console.log("Servidor inicializado"));