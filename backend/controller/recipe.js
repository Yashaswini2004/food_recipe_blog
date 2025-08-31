const Recipe=require("../models/recipe")
const getRecipes=async (req,res)=>{
   const recipes=await Recipe.find();
   return res.json(recipes);
}
const getRecipe=async (req,res)=>{
   const recipe=await Recipe.findById(req.params.id);
   return res.json(recipe);
}
const addRecipes=async (req,res)=>{
   const {title,ingredients,instruction,time}=req.body;
   if(!title || !ingredients || !instruction){
    res.json({message:"Required fields can't br empty"})
   }
   const newRecipe=await Recipe.create({
    title,ingredients,instruction,time
   })
   return res.json(newRecipe);
}
const editRecipes=async (req,res)=>{
    const {title,ingredients,instruction,time}=req.body;
    let recipe=await Recipe.findById(req.params.id);
    try{
    if(recipe){
        await Recipe.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json({title,ingredients,instruction,time})
    }
}
catch(err){
   return res.status(404).json({message:"error"})
}
}
const deleteRecipes=(req,res)=>{
    res.json({message:"hello"})
}
module.exports={getRecipes,getRecipe,addRecipes,editRecipes,deleteRecipes};