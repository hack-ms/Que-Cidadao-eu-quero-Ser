const fs = require('fs');
const path = require("path");

exports.getQuestionById = (id) => {
    return JSON.parse(
        fs.readFileSync(path.resolve(__dirname, 'questions.json'))
    )
        .find((question) => question.id.toString() === id);
};