const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://pysexuvgrdykrz:85d94f3c3af560eb1d5a277a2fea5d2c0d81cac2d4888630917f9ca8d1322538@ec2-107-21-10-179.compute-1.amazonaws.com:5432/d762pqmb621fmn";
const { Sequelize, DataTypes } = require("sequelize");
const Food = require('./food');
const Clothes=require('./clothes')

var sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
    db: sequelize,
    food: Food(sequelize, DataTypes),
    clothes:Clothes(sequelize, DataTypes)
}


// postgres://siham@localhost:5432/food