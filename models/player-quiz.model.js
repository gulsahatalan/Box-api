export default (sequelize, Sequelize) => {
    return sequelize.define("player_quiz", {
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