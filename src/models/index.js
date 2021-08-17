const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://siham@localhost:5432/food";
const { Sequelize, DataTypes } = require("sequelize");
const Food = require('./food');
const Clothes=require('./clothes')

var sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
    db: sequelize,
    food: Food(sequelize, DataTypes),
    clothes:Clothes(sequelize, DataTypes)
}