'use strict'
const express=require('express');
const app=express();

const notFoundHandler=require('./error-handlers/404');
const errorHandler=require('./error-handlers/500');

const logger = require("./middleware/logger");
const validator = require("./middleware/validator");

const foodRoutes=require('./routes/food')
const clothesRoutes=require('./routes/clothes');


app.use(express.json());
app.use(logger);
app.use(foodRoutes);
app.use(clothesRoutes)

app.get('/', (req, res) => {
    res.status(200).send('Every Thing Is Working Good')
});
app.get('/badmethod',(req,res)=>{
    throw new Error('Error');
  })

app.get('/bad',(req,res)=>{
    res.status(404).send('this is pad route')
})


app.use("*",notFoundHandler)
app.use(errorHandler);

module.exports={
    server :app,
    start:port=>{
        app.listen(port,()=>{console.log(`server is up on port ${port}`);})
    }
}