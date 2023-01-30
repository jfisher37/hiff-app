'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.user, {through: 'userProjects'})
    }
  }
  Project.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    proposal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    solving: {
      type: DataTypes.STRING,
      allowNull: false
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tags: {
      type: DataTypes.ARRAY,
      allowNull: false
    },
    mainImg: DataTypes.STRING,
    imgs: DataTypes.ARRAY,
    approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};