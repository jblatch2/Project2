// Creating our Buddy Request model
module.exports = function(sequelize, DataTypes) {
  const buddyRequest = sequelize.define("buddyRequest", {
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    groupSize: {
      type: DataTypes.INTEGER,
      defaultValue: "0"
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      defaultValue: "Zoom"
    },
    zodiac: {
      type: DataTypes.STRING
    }
  });

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  return buddyRequest;
};
