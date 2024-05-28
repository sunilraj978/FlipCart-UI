import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'


const Home = ()=>{

  return(
    <div>
      <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="2000">
      <img  src="https://www.federalbank.co.in/documents/10180/24194772/Flipkart+WEB-01.jpg/62cd4749-5d32-af0a-43be-0eb382f36688?t=1593859549879" style={{width:"100px",height:"250px"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src="https://storiesflistgv2.azureedge.net/stories/2017/09/bbdschedule_mainbanner2-59bfb1e3e37b8.jpg" style={{width:"400px",height:"250px"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn0.desidime.com/cdn-cgi/image/fit=crop,f=auto,onerror=redirect,w=1200,h=900,q=90/topics/photos/1195593/original/Exciting-offers-on-Home-_-Kitchen-Appliances-and-Electronics-1200-x675.jpg" style={{width:"400px",height:"250px"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.rentone.in/assets/img/offer-fur.png" style={{width:"400px",height:"250px"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://sathya.in/Media/Default/Uploaded/df2.jpg" style={{width:"400px",height:"250px"}} className="d-block w-100" alt="..."/>
    </div>
    
    
  </div>
  <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

<div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"90px",border:"2px solid black",marginLeft:"450px",marginRight:"450px",padding:"20px"}}>
<h3>Admin Side</h3>
    <Link to="/addCat" >Add Category</Link>
    <Link to="/addPro" >Add Product</Link>   
     
</div>   

    </div>
  )
}


export default Home