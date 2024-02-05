import React, {} from "react";
import { NavLink } from "react-router-dom";
// import ProductDetail from "./ProductDetail";
// import AddToCart from "./AddToCart";

const Card = ({image,title,price,review,id}) =>{
 
    
     
    return(
        <>
       
        <NavLink to={`/product/productdetail/${id}`}  id="product-detail"> 
  
        <div className="card">
             
            <img src={image[0].url} alt="iamge"/>
            <div className="card-text">
            <p className="title">{title}</p>
            <p><i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </p>
            <div className="bag-icon">
            <p>₹{price}</p> <i class="fa-solid fa-bag-shopping"></i>           
            </div>
             
            </div>
        </div>
         
        </NavLink>
        </>
    )
}
export default Card;
 