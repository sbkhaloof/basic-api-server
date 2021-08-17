'use strict'
const Food = (sequelize, DataTypes) => {
let Food=sequelize.define('Food',{
        foodName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        foodType: {
            type: DataTypes.STRING,
        },
        
    })
  return Food;  
}

module.exports= Food ;








  