export default (sequelize, Sequelize) => {
    return sequelize.define("quizQuestion", {
      quizId: {
        type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          
      },
      wordId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
       
    },
    wordName: {
      type: Sequelize.DataTypes.STRING,
      // primaryKey: true,
      
  },
  noCorrect: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    // autoIncrement: true
}
    });
  };