const {getQuestionById} = require("../model/repository/QuestionRepository");

exports.getQuestion = (req, res) => {
    const id = req.params.id;
    const question = getQuestionById(id);

    if(question)
        res.status(200).send(question);
    else
        res.status(404).send(question);
};

