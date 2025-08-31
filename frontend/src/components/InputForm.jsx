import React, { useState } from 'react'

function InputForm() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [isSignUp,setIsSignUp]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <>
       <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form-control">
             <label htmlFor="">Email</label>
             <input type="email" className='input'  onChange={(e)=>setEmail(e.target.value)} required />
          </div>
           <div className="form-control">
             <label htmlFor="">Password</label>
             <input type="password" className='input' onChange={(e)=>setPassword(e.target.value)} required />
          </div>
          <button type='submit'>{isSignUp?"Sign Up":"Login"}</button><br /><br />
          <p onClick={()=>setIsSignUp(true)}>{isSignUp ? "Already have an account":"Create new account"}</p>
       </form>
    </>
  )
}

export default InputForm
