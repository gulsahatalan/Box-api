import Sequelize from 'sequelize';
import dbConfig from "../environment-config.json";
import StudentModel from "./student.model.js";
import EnrollmentModel from "./enrollment.model.js";

import WordModel from "./word.model.js";
import UserModel from "./userList.model.js";

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

db.student = StudentModel(sequelize, Sequelize);

db.enrollment = EnrollmentModel(sequelize, Sequelize);
db.word = WordModel(sequelize, Sequelize);
db.userList = UserModel(sequelize, Sequelize);

// create relationships
// https://sequelize.org/master/manual/advanced-many-to-many.html
// Many-to-many-to-many relationships and beyond
// db.teacher.belongsToMany(db.word, { through: db.user });
// db.word.belongsToMany(db.teacher, { through: db.user });
db.userList.belongsTo(db.word);
// db.user.belongsTo(db.teacher);
// db.teacher.hasMany(db.user);
db.word.hasMany(db.userList);

// db.student.belongsToMany(db.user, { through: db.enrollment });
// db.user.belongsToMany(db.student, { through: db.enrollment });
// db.enrollment.belongsTo(db.student);
// db.enrollment.belongsTo(db.user);
// db.student.hasMany(db.enrollment);
// db.user.hasMany(db.enrollment);


// use it to force to create the db from scratch 
// .sync({ force: true })
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
});

export default db;


