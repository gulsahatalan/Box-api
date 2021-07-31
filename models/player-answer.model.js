export default (sequelize, Sequelize) => {
    return sequelize.define("player_answer", {
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