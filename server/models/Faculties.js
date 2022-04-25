module.exports = (sequelize, DataTypes) => {
    const Faculties = sequelize.define("Faculties", {
      facultyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      programOfStudy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      yearOfStudy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Faculties.associate = (models) => {
        Faculties.hasMany(models.Users, {
          onDelete: "cascade",
        });      
      };
      
    return Faculties;
  };
  