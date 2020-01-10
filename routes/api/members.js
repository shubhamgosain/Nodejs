const express=require('express');
const members=require('../../members');

const router=express.Router();

//Get all the members
router.get('/',(req,res) => res.send(members));

//Get a single member
router.get('/:id_val',(req,res)=>{
if(members.some(i => i.id === parseInt(req.params.id_val))){
    res.json(members.filter(i => i.id === parseInt(req.params.id_val)));
}
else {
    res.status(400).json({msg : `Id ${req.params.id_val} not an existing id`})
}
})
module.exports=router;