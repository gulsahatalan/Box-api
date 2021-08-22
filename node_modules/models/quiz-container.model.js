export default (sequelize, Sequelize) => {
    return sequelize.define("quiz_container", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true    
      }
    });
  };