import React,{useState} from "react";
import "./all.css";
//import {useCart} from "react-use-cart"
  export default function Cards({item})
  {
    const {id,title,description,price,amount}=item;
    //const {updateItemQuantity}=useCart();
   const [initial,setInitial] =useState(0);
   const [before,setTotal] =useState(0);
    var total=0;
    var i=0;
   
    //var e1=item.amount;
    const handleIncrement=()=>{
         setInitial(initial+1);
         //setInitial(item.price*initial);
     }
      total=item.price*initial;
      const Total=({})=>
      {

      }
      
    return (
    <div className="cards">
      <h1>{title}</h1>
      <p >{description}</p>
      <div className="details">
      <p>Price:₹{price}</p>
      <p>Quantity:({initial})</p>
    </div>
      <button onClick={()=>handleIncrement()}>+</button>
     
     <h1 className="total">SubTotal:{total}</h1>
     </div>
    );
  }