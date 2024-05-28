import React from 'react'
import PersonIcon from '@material-ui/icons/Person';


const Profile = ()=>{
    const {user:{
        name,email,_id
    }} = JSON.parse(localStorage.getItem("jwt"))
    return( 
        <div style={{display:"flex",flexDirection:"row"}}>
           <div style={{backgroundColor:"#eeeeee",height:"100vh",display:"flex",flexDirection:"column",flex:"0.32"}}>
               <div style={{display:"flex",marginTop:"40px",backgroundColor:"white",padding:"6px",boxShadow: "5px 5px 5px #888888",width:"200px",marginLeft:"50px"}}>
               <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_2fd3e8.svg" alt=""/>
               <h5 style={{marginTop:"8px",marginLeft:"2px"}}>Hello {name}</h5>
               </div>
               <div style={{marginTop:"40px",backgroundColor:"white",width:"300px",marginLeft:"50px",padding:"6px",height:"320px",boxShadow: "5px 5px 5px #888888"}}>
               <div style={{display:"flex",marginTop:"40px"}}>
               <PersonIcon style={{color:"blue"}} />
               <h5 style={{color:"grey"}}>Account Details</h5>
               </div>
               <ul>
                   <li style={{color:"blue"}}>Personal Information</li>
               </ul>
               </div>
           </div>
           <div style={{backgroundColor:"#eeeeee",display:"flex",flexDirection:"column",flex:"0.78",marginLeft:"20px"}}>
             <div style={{marginTop:"20px",marginLeft:"20px"}} >
               <h5>Flipcart Id</h5>
               <input style={{border:"none",width:"400px",padding:"10px"}} value={_id} />
               </div>
               <div style={{marginTop:"20px",marginLeft:"20px"}} >
               <h5>Email Address</h5>
               <input style={{border:"none",width:"400px",padding:"10px"}} value={email} />
               </div>
               <div style={{marginTop:"30px",marginLeft:"20px"}} >
               <h5>Name</h5>
               <input style={{border:"none",width:"400px",padding:"10px"}} value={name} />
               </div>
               <div style={{marginTop:"30px",marginLeft:"20px",display:"flex",flexDirection:"column"}}>
                   <strong>FAQs</strong>
                 <strong> What happens when I update my email address (or mobile number)? </strong>
                 <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                 <strong>When will my Flipkart account be updated with the new email address (or mobile number)?</strong>
                 <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
                 <strong>What happens to my existing Flipkart account when I update my email address (or mobile number)?</strong>
                 <p>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
                 <strong>
                 Does my Seller account get affected when I update my email address?
                 </strong>
                 <p>
                 Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.
                 </p>
               </div>
               <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/myProfileFooter_0cedbe.png" alt="" />
           </div>
           
          
           
        </div>
        

    )

    }    


    export default Profile