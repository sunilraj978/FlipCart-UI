import React,{useState,useEffect} from 'react'

function Mob() {
    const [sold,setSold] = useState([])
    const [arrival,setArrival] = useState([])
  
    const DisplayProduct = (sortBy)=>{
     return fetch(`/product?sortBy=${sortBy}&order=desc&limit=6`, {
          
              method: "get",
      
      })
          .then(response => {
            return response.json()
          })
          .catch(err=>console.log(err))
          
  }
  
  const loadProductBySell = ()=>{
    DisplayProduct('sold').then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setSold(data)
      }
    })
  }
  
  useEffect(()=>{
    loadProductBySell()
    loadProductByArrival()
  },[])
  
  
  const loadProductByArrival = ()=>{
    DisplayProduct('createdAt').then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setArrival(data)
      }
    })
  }
    return (
        <div>
            <div>
            {
     
     sold&&
          sold.map((product,i)=>(
             <div>
                 <h2>{product.name}</h2>
                 <img src={product.photo} />
                </div> 
          )
         )
         }

            </div>
        </div>
    )
}

export default Mob
