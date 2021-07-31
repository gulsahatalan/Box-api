export default (sequelize, Sequelize) => {
    const Quiz = sequelize.define("quiz", {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
          autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      }
     
    });
  
    return Quiz;
  };