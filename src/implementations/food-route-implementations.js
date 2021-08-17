
const {food}=require('../models/index');
 
async function createfood(req,res){
    let foodInfo=req.body;
    let myfood=await food.create(foodInfo);
    res.status(201).json(myfood);
}

async function getfood(req,res){
    let id=parseInt(req.params.id);
    let myfood=await food.findOne({where :{id:id}});
    res.status(200).json(myfood);
}

async function getAllfood(req,res){
    console.log('inside get all fun oooooooo')
    let all=await food.findAll();
    res.status(200).json(all);
}

async function updatefood(req,res){
    let id=parseInt(req.params.id);
    let foodInfo=req.body;
    let myfood=await food.findOne({where:{id}});
    let updatefoodInfo= await myfood.update(foodInfo);
    res.status(200).json(updatefoodInfo);
}

async function deletefood(req,res){
    let id=parseInt(req.params.id);
    let delFood=await food.destroy({where:{id}})
    res.status(204).json(delFood);
}
module.exports={
    createfood,
    getfood,
    getAllfood,
    updatefood,
    deletefood
}