import React,{useState,useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {UserContext} from '../user/Routes'
const SignIn = ()=>{
  const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [email,setEmail] = useState("")
    const [wrong,setWrong] = useState("")
    const [success,setSuccess] = useState("")
    const [Password,setPassword] = useState("")
    
    const saveData = (e)=>{
        e.preventDefault()
        fetch("/Login", {
          method: "post",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
               email, Password,
          })
      }).then(res => res.json())
          .then(data => {
              if (data.error) {
                console.log(data.error)
                setWrong(data.error)
              }
              else if (data.message) {
                console.log(data.message)
                setSuccess(data.message)
                localStorage.setItem("jwt",JSON.stringify(data))
                dispatch({type:"User",payload:data.user})
                  history.push('/')
                  
              }
          })

      }

      const Wrong = ()=>
       (success||wrong)&&(
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            {success?success:wrong?wrong:""}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
        )
      

    return(
      <div>
        {Wrong()}
        <div style={{display:"flex",flexDirection:"row"}}>
           <div style={{backgroundColor:"blue",height:"100vh",display:"flex",flexDirection:"column",flex:"0.10"}}>
               <h2 style={{color:"white",paddingTop:"30px",fontSize:"35px"}}>Login</h2>
               <p style={{color:"white",paddingTop:"30px"}}>Get access to your Orders, Wishlist and Recommendations</p>
               <img src="https://lh3.googleusercontent.com/proxy/XdXxAiSQCH2CFlZQGrQLwWbO_-0gaVPaNbZec5stDjxPF3-p-_pv2sCZh6wrgyqL1_jWI92BZN2kwORu7bs4w1J1sq6BMExsYhqsEM52vG2aKpR-613miCQ" style={{width:"200px",marginTop:"200px"}} alt=""/>
           </div>
           <div style={{backgroundColor:"white",display:"flex",flex:"0.78",justifyContent:"center",marginLeft:"20px"}}>
               <form>
               <div class="form-group">
               <div class="form-group">
  </div>
    <label for="exampleInputEmail1">Email address</label>
    <input size="150" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input size="40"  type="password" class="form-control" id="exampleInputPassword1" value={Password} onChange={(e)=>setPassword(e.target.value)} />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onClick={(e)=>saveData(e)} style={{width:"350px",height:"40px",marginTop:"30px",border:"none",outlineWidth:"0",backgroundColor:"orange",color:"white"}}>SignUp</button>
  <h5 style={{marginTop:"10%",textAlign:"center",color:"grey"}}>New to Flipkart? <Link className="nav-Item" to="/signUp">Create an account</Link></h5>
  </div>
               </form>
               
           </div>
           
           
        </div>
        </div>
        
    )
}


export default SignIn