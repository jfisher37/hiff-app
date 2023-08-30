'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MainPage extends Model {
    static associate(models) {
      // No associations defined for this table
    }
  }

  MainPage.init(
    {
      mainImg: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      homeText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: 'MainPage',
    }
  );

  return MainPage;
};