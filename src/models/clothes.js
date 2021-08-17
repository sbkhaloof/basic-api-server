'use strict'
const Clothes = (sequelize, DataTypes) => { 
    let Clothes=sequelize.define('Clothes', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
    },
});
return Clothes;
}

module.exports= Clothes ;
