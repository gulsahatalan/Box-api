export default (sequelize, Sequelize) => {
    return sequelize.define("userAnswer", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
      },
    
      found: {
        type: Sequelize.INTEGER
      }
    });
  };