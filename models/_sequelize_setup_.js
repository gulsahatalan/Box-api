import Sequelize from 'sequelize';
import dbConfig from "../environment-config.json";
import QuizModel from "./quiz.model.js";
import UserQuizModel from "./userQuiz.model.js"

import WordModel from "./word.model.js";
import PlayerModel from "./player.model.js";
import UserAnswerModel from "./userAnswer.model.js";
import QuizContainerModel from "./quizContainer.model.js";
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,
//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });
const sequelize = new Sequelize("box", "root", "14531453", {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.quiz = QuizModel(sequelize, Sequelize);
db.word = WordModel(sequelize, Sequelize);
db.player = PlayerModel(sequelize, Sequelize);
db.userAnswer = UserAnswerModel(sequelize, Sequelize)
db.quizContainer = QuizContainerModel(sequelize, Sequelize)
db.userQuiz = UserQuizModel(sequelize, Sequelize)


db.word.belongsToMany(db.quiz, { through: db.quizContainer });
db.quiz.belongsToMany(db.word, { through: db.quizContainer });
db.quizContainer.belongsTo(db.quiz);
db.quizContainer.belongsTo(db.word);
db.word.hasMany(db.quizContainer);
db.quiz.hasMany(db.quizContainer);

db.player.belongsToMany(db.quizContainer, { through: db.userAnswer });
db.quizContainer.belongsToMany(db.player, { through: db.userAnswer });
db.userAnswer.belongsTo(db.player);
db.userAnswer.belongsTo(db.quizContainer);
db.player.hasMany(db.userAnswer);
db.quizContainer.hasMany(db.userAnswer);


db.player.belongsToMany(db.quiz, { through: db.userQuiz });
db.quiz.belongsToMany(db.player, { through: db.userQuiz });
db.userQuiz.belongsTo(db.quiz);
db.userQuiz.belongsTo(db.player);
db.player.hasMany(db.userQuiz);
db.quiz.hasMany(db.userQuiz);


// use it to force to create the db from scratch 
// .sync({ force: true })
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");

});

export default db;


