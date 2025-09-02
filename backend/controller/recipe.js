const Recipe=require("../models/recipe");
const multer=require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + '-' + file.fieldname
    cb(null, filename)
  }
})

const upload = multer({ storage: storage })
const getRecipes=async (req,res)=>{
   const recipes=await Recipe.find();
   return res.json(recipes);
}
const getRecipe=async (req,res)=>{
   const recipe=await Recipe.findById(req.params.id);
   return res.json(recipe);
}
const addRecipes = async (req, res) => {
  try {
    const { title, ingredients, instruction, time } = req.body;

    // validation check
    if (!title || !ingredients || !instruction) {
      return res.status(400).json({ message: "Required fields can't be empty" });
    }

    const newRecipe = await Recipe.create({
      title,
      ingredients,
      instruction,
      time
    });

    return res.status(201).json(newRecipe);
  } catch (error) {
    console.error("Error adding recipe:", error);
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};

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
module.exports={getRecipes,getRecipe,addRecipes,editRecipes,deleteRecipes,upload};