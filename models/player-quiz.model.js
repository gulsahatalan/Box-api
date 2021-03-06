export default (sequelize, Sequelize) => {
    return sequelize.define("player_quiz", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      // the last question from the last session
      counter: {
        type: Sequelize.INTEGER
      }
    });
  };