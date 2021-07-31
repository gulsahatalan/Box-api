export default (sequelize, Sequelize) => {
    return sequelize.define("quizContainer", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true    
      }
    });
  };