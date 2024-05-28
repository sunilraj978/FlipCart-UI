import React,{useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {UserContext} from '../user/Routes'
const Menu = ()=>{
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link class="navbar-brand" to="/">
          <div style={{display:"flex"}}>
          <img src="https://www.searchpng.com/wp-content/uploads/2019/01/Flipart-Logo-Icon-PNG-Image.png" style={{width:"50px",height:"40px"}} alt="flipcart" />
          <h2>Flipcart</h2>
          </div>
        </Link>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control lg-1" size="40" type="search" placeholder="Search" aria-label="Search"/>
          </form>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div style={{paddingLeft:"220px"}} class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
           
            
            <li class="nav-item dropdown">
              {
                !state&&(
                  <div>
                    <div style={{width:"150px",height:"35px",backgroundColor:"white",color:"blue",border:"none",outlineWidth:"0",fontWeight:"bold",textAlign:"center"}} class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Login 
              </div>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/signIn">Login</Link>
          <div class="dropdown-divider"></div>
          <Link className="dropdown-item" to="/signUp">new user?</Link>
          <div class="dropdown-divider"></div>
          <Link className="dropdown-item" to="/Admin/Login">Admin</Link>    
        </div>
                  </div>
                )
              }
            </li>
            <li class="nav-item">
             {
               state&&(
                 <div style={{display:"flex",justifyContent:"space-between"}}>
                   <Link className="" style={{color:"blue",backgroundColor:"white",marginLeft:"",marginRight:"50px",padding:"4px"}} to="/profile">Profile</Link>
                   <button onClick={(e)=>{
                     e.preventDefault()
                     localStorage.clear()
                     history.push("/signIn")
                   }} style={{width:"100px",backgroundColor:"white",color:"blue",border:"none",outlineWidth:"0",fontWeight:"bold"}}>SignOut</button>
                 </div>
               )

              }
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Menu