import React,{useState} from 'react'

function AddCategory(){
    const [wrong,setWrong] = useState("")
    const [name,setName] = useState("")
    const [success,setSuccess] = useState("")
    const {user:{
        _id
    },token} = JSON.parse(localStorage.getItem("jwt"))
    const addCategory = (e)=>{
        e.preventDefault()
        fetch(`/category/${_id}`,{
            method:"post",
            headers:{
                Accept: "application/json",
                "Content-Type":"application/json",
                Authorization: `abcd ${token}`
            },
            body:JSON.stringify({name})    
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                console.log(data.error)
                setWrong(data.error) 
            }
            else{
                console.log(data.message)
                setSuccess("created")
                setName("")
            }
        })
    }

    //
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
<form>
  <div className="form-group">
    <label for="exampleInputEmail1">Add new Category</label>
    <input type="email" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Category Name"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  
  <button onClick={(e)=>addCategory(e)} type="submit" class="btn btn-primary">Add</button>
</form>
        </div>
    )
}

export default AddCategory;