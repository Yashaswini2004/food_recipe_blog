import React from 'react'
import foodRecipe from "../assets/foodRecipe.png";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecipeItems from '../components/RecipeItems';
function Home() {
  return (
    <>
     
      <section className='home'>
          <div className='left'>
              <h1>Food Recipe</h1>
              <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h5>
               <button>Share your recipe</button>
          </div>
          <div className="right">
            <img src={foodRecipe} alt="" width="320px" height="300px"/>
          </div>
      </section>
      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,160L21.8,149.3C43.6,139,87,117,131,128C174.5,139,218,181,262,202.7C305.5,224,349,224,393,208C436.4,192,480,160,524,149.3C567.3,139,611,149,655,170.7C698.2,192,742,224,785,240C829.1,256,873,256,916,218.7C960,181,1004,107,1047,85.3C1090.9,64,1135,96,1178,122.7C1221.8,149,1265,171,1309,202.7C1352.7,235,1396,277,1418,298.7L1440,320L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
      </div>
       <div className='recipe'>
          <RecipeItems/>
       </div>
    </>
  )
}

export default Home
