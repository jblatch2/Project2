// Creating our Buddy Request model
module.exports = function(sequelize, DataTypes) {
  const buddyRequest = sequelize.define("buddy_request", {
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    groupSize: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zodiac: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
 
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  return buddyRequest;
};
