import React,{useState} from "react";
import list, { products } from './product'
import Cards from './Card'
import "./all.css";
  export default function Basket(props)
  {
    var total=0;
                                                          
    return (
      <section>
      {
        products.map((item)=><Cards key={item.id} item={item}/>
        )
      }
     <h1 className="total">Total:₹{total}</h1>
     <h2>order date:27/10/2022</h2>
     <h2>expected delivery:30/10/2022</h2>
      </section>
    );
  }