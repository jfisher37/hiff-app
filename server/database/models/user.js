'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Token)
    }
  }
  User.init({
    first: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
  }, 
  {
    // hooks: {
    //   beforeCreate: async (user, options) => {
    //     bcrypt.hash(user.password, saltRounds, async function(err, hash) {
    //       console.log("HEYY!!22222");
    //       user.password = await hash;
    //       console.log(user);
    //       return user;
    //   });
    //   },
    //   beforeUpdate: (user, options) => {
    //     bcrypt.hash(user.password, saltRounds, function(err, hash) {
    //       user.password = hash;
    //   });
    //   },
    // },

    sequelize,
    modelName: 'User',
  },
 );

//  User.beforeCreate(async (user, options) => {
//   console.log("HERE!!");
//   const hashedPassword = await bcrypt.hash(user.password, saltRounds);
//   console.log("HP:", await hashedPassword);
//   user.password = await hashedPassword;
// });

// User.afterFind(async (options, row, param) => {

//   if(row.where.password){
//   console.log("THIS:", User);
//   console.log("options:", options);
//   console.log("param:", param);
//   bcrypt.compare(row.where.password, hash, function(err, result) {
//     return result
// });
// } else {console.log("FUCK OFF");}
// });

  return User;
};