export default (sequelize, Sequelize) => {
    return sequelize.define("enrollment", {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      }
    });
  };