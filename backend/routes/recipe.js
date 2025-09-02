const express=require("express");
const { getRecipes,getRecipe,addRecipes,editRecipes,deleteRecipes,upload } = require("../controller/recipe");
const router=express.Router()
router.get("/",getRecipes);
router.get("/:id",getRecipe);
router.post("/",upload.single('coverImage'),addRecipes);
router.put("/:id",editRecipes);
router.delete("/:id",deleteRecipes);
module.exports=router