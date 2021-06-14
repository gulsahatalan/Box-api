export default (sequelize, Sequelize) => {
    return sequelize.define("word", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
      },
      name: {
        type: Sequelize.STRING
      },
      meaning: {
        type: Sequelize.STRING
      }
    });
  };