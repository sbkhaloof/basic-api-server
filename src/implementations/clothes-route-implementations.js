
const {clothes}=require('../models/index');
 
async function createclothes(req,res){
    let clothesInfo=req.body;
    let myclothes=await clothes.create(clothesInfo);
    res.status(201).json(myclothes);
}

async function getclothes(req,res){
    let id=parseInt(req.params.id);
    let myclothes=await clothes.findOne({where :{id:id}});
    res.status(200).json(myclothes);
}

async function getAllclothes(req,res){
    let all=await clothes.findAll();
    res.status(200).json(all);
}

async function updateclothes(req,res){
    let id=parseInt(req.params.id);
    let clothesInfo=req.body;
    let myclothes=await clothes.findOne({where:{id}});
    let updateclothesInfo= await myclothes.update(clothesInfo);
    res.status(200).json(updateclothesInfo);
}

async function deleteclothes(req,res){
    let id=parseInt(req.params.id);
    let delclothes=await clothes.destroy({where:{id}})
    res.status(204).json(delclothes);
}
module.exports={
    createclothes,
    getclothes,
    getAllclothes,
    updateclothes,
    deleteclothes
}