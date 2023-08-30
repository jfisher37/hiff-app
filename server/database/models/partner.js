'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Partner extends Model {
    static associate(models) {
      // No associations defined for this table in this example
    }
  }

  Partner.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tier: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      link: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Partner',
    }
  );

  return Partner;
};
