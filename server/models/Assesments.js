module.exports = (sequelize, DataTypes) => {
  const Assesments = sequelize.define("Assesments", {
    courseName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Grade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Assesments;
};
