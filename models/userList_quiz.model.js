export default (sequelize, Sequelize) => {
    return sequelize.define("userList_quiz", {
      quizId: {
        type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
       
    }
   
    });
  };