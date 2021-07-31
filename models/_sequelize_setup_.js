import Sequelize from 'sequelize';
import dbConfig from "../environment-config.json";

import QuizModel from "./quiz.model.js";
import PlayerQuizModel from "./player-quiz.model.js"
import WordModel from "./word.model.js";
import PlayerModel from "./player.model.js";
import PlayerAnswerModel from "./player-answer.model.js";
import QuizContainerModel from "./quiz-container.model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
   host: dbConfig.HOST,
   dialect: dbConfig.dialect,
   operatorsAliases: false,
   pool: {
     max: dbConfig.pool.max,
     min: dbConfig.pool.min,
     acquire: dbConfig.pool.acquire,
     idle: dbConfig.pool.idle
   }
 });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.quiz = QuizModel(sequelize, Sequelize);
db.word = WordModel(sequelize, Sequelize);
db.player = PlayerModel(sequelize, Sequelize);
db.playerAnswer = PlayerAnswerModel(sequelize, Sequelize)
db.quizContainer = QuizContainerModel(sequelize, Sequelize)
db.playerQuiz = PlayerQuizModel(sequelize, Sequelize)


db.word.belongsToMany(db.quiz, { through: db.quizContainer });
db.quiz.belongsToMany(db.word, { through: db.quizContainer });
db.quizContainer.belongsTo(db.quiz);
db.quizContainer.belongsTo(db.word);
db.word.hasMany(db.quizContainer);
db.quiz.hasMany(db.quizContainer);

db.player.belongsToMany(db.quizContainer, { through: db.playerAnswer });
db.quizContainer.belongsToMany(db.player, { through: db.playerAnswer });
db.playerAnswer.belongsTo(db.player);
db.playerAnswer.belongsTo(db.quizContainer);
db.player.hasMany(db.playerAnswer);
db.quizContainer.hasMany(db.playerAnswer);


db.player.belongsToMany(db.quiz, { through: db.playerQuiz });
db.quiz.belongsToMany(db.player, { through: db.playerQuiz });
db.playerQuiz.belongsTo(db.quiz);
db.playerQuiz.belongsTo(db.player);
db.player.hasMany(db.playerQuiz);
db.quiz.hasMany(db.playerQuiz);


// use it to force to create the db from scratch 
// .sync({ force: true })
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

export default db;


