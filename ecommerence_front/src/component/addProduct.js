import React,{useState,useEffect} from 'react'




function Product(){

    const [name,setName] = useState("")
    const [about,setDes] = useState("")
    const [quantity,setQty] = useState("")
    const [category,setCat] = useState("")
    const [wrong,setWrong] = useState("")
    const [success,setSuccess] = useState("")
    const [shipping,setShip] = useState("")
    const [photo,setPhoto] = useState("")
    const [price,setPrice] = useState("")
    const [url,setUrl] = useState("")
    const [cate,setArray] = useState([])


    const postDetails = (e)=>{
        e.preventDefault()
        const data = new FormData()
        data.append("file",photo)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","batmitton")
        fetch("https://api.cloudinary.com/v1_1/batmitton/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
            
        })    
        
    }

    const {user:{
        _id
    },token} = JSON.parse(localStorage.getItem("jwt"))

const getCatgeory = ()=>{
    fetch("/allCategory", {
        headers: {
            method: "get",
        }
    })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            if(!result){
                setWrong("error")
            }
            else{
                setArray(result.message)
                
            }
        })
}

useEffect(()=>{
    getCatgeory()
    console.log(cate)
        if(url){
            fetch(`/addProduct/${_id}`,{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `abcd ${token}`
                },
                body:JSON.stringify({
                    name
                    ,about,price,photo:url,quantity,shipping,category
                    
                })  
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.error){
                  
                    console.log(data.error)
                    setWrong(data.error) 
                }
                else{
                    console.log("Success")
                    
                    setSuccess("created")
                    
                }
            })
            
        }
    },[url])



    const Wrong = ()=>
    wrong?(
       <div class="alert alert-danger alert-dismissible fade show" role="alert">
         {wrong}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
 <span aria-hidden="true">&times;</span>
</button>
</div>
)
:
success?(
<div class="alert alert-success alert-dismissible fade show" role="alert">
         {success}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
 <span aria-hidden="true">&times;</span>
</button>
</div>
)
:""


    return(
        <div>
             {Wrong()}
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Product Name</label>
                    <input type="text" class="form-control"  placeholder="Product Name" value={name} onChange={(e)=>setName(e.target.value)} />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <input type="text" class="form-control"placeholder="Description" value={about} onChange={(e)=>setDes(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Quantity</label>
                    <input type="number" class="form-control"placeholder="Quantity" value={quantity} onChange={(e)=>setQty(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Category</label>
                    <select class="form-control"  onChange={(e)=>setCat(e.target.value)}>
                        <option>Please Select</option>
                        {
                            cate&&
                            cate.map(item=>(
                               
                                
                                    <option key={"_id"} value={item._id}>{item.name}</option>
                                
                            )
                        )
                        }
                        
                        </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Shipping</label>
                    <select  class="form-control"placeholder="Shipping"  onChange={(e)=>setShip(e.target.value)}>
                        <option value="Choose Option">Choose Option</option>
                        <option value="yes"> Yes </option>
                        <option value="No">No</option>
                        </select>

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Photo</label>
                    <input  type="file" class="btn btn-secondary" onChange={(e)=>setPhoto(e.target.files[0])}  />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Price</label>
                    <input type="text" class="form-control"placeholder="Price" accept="image/*" value={price} onChange={(e)=>setPrice(e.target.value)} />
                </div>
                
                
                <button onClick={(e)=>postDetails(e)} style={{width:"200px",backgroundColor:"orange"}} type="submit" class="btn">Add Product</button>
                <br/>
                <br/>
</form>
        </div>
    )
}

export default Product