export default (sequelize, Sequelize) => {
    return sequelize.define("userList", {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      wordCount: {
        type: Sequelize.INTEGER
      }
    });
  };