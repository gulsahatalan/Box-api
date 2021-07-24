export default (sequelize, Sequelize) => {
    return sequelize.define("userQuiz", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
      },
    
      counter: {
        type: Sequelize.INTEGER
      }
    });
  };