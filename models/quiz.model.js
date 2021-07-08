export default (sequelize, Sequelize) => {
    const Quiz = sequelize.define("quiz", {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
          autoIncrement: true
      },
      retry: {
        type: Sequelize.INTEGER
      }
     
    });
  
    return Quiz;
  };