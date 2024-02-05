// import React, { useState } from "react"
// import { NavLink, useParams } from "react-router-dom";
// import { API } from "./API";
// import PageNavigation from "./PageNavigation";
// import MyImage from "./MyImage";
// // import AddToCart from "./AddToCart";
// import { useCartContext } from "./Context/CartContext";
 

// const ProductDetail = () =>{
//     const {addToCart} = useCartContext();
//     const {id} = useParams();
//     console.log(id);
//     const [singlePage] = useState(API);
 
//     // console.log(singleValues);
//  const singleData = singlePage.filter((currentPage)=>{
//     return currentPage.id === id;
//  });
//   const{image, title,price, brand, rating, category }=singleData[0] || {};
 
      
     
    
       
//     return(
//         <>
//         <PageNavigation title={title}/>
//          <div className="singlePage">
              
//             <MyImage imgs={image} />
            
              
//             <div className="page-data">
//                 <p id="product-title">{title}</p>
//                 <p>Rating : {rating}</p>
//                 <p>MRP : {price}</p>
//                 <p className="product-discription">A product description is a form of marketing copy used to <br/> describe and explain the benefits of your product. In other <br/> words, it provides all the information and details of your <br/> product on your ecommerce site product description is <br/> a form of marketing copy used to</p>
//                 <div className="icons">
//                 <i class="fa-solid fa-truck"></i>
//                 <i class="fa-solid fa-repeat"></i>
//                 <i class="fa-solid fa-check"></i>
//                 <i class="fa-solid fa-mobile"></i>
//                 </div>
//                 <p>Brand : {brand}</p>
//                 <p>Category : {category}</p>
//                 <input className="number-input" type="number" placeholder="1" min="1" max="10"/>
//                 <div className="product-button">
//                 <NavLink to="/addtocart">
//                     <button onClick={() => addToCart(image, title, price ,id)}>ADD TO CART</button>
                     
//                 </NavLink>
                    
//                     <button >BUY NOW</button>

//                 </div>

//             </div>
//          </div>
           
          
//         </>
//     )
// }
// export default ProductDetail;
import React, { useState } from "react"
import { NavLink, useParams}from "react-router-dom";
import { API } from "./API";
import PageNavigation from "./PageNavigation";
import MyImage from "./MyImage";
import AddToCart from "./AddToCart";
import { useCartContext } from "./Context/CartContext";

const ProductDetail = () => {
  const { addToCart } = useCartContext();
  const { id } = useParams();
  console.log(id);
  const [singlePage] = useState(API);

  const singleData = singlePage.find((currentPage) => currentPage.id === id);
  const { image, title, price, brand, rating, category } = singleData || {};

  return (
    <>
      <PageNavigation title={title} />
      <div className="singlePage">
        <MyImage imgs={image} />
        <div className="page-data">
          <p id="product-title">{title}</p>
          <p>Rating : {rating}</p>
          <p>MRP : {price}</p>
          <p className="product-discription">
            A product description is a form of marketing copy used to <br />
            describe and explain the benefits of your product. In other
            <br />
            words, it provides all the information and details of your <br />
            product on your ecommerce site product description is <br />
            a form of marketing copy used to
          </p>
          <div className="icons">
            <i class="fa-solid fa-truck"></i>
            <i class="fa-solid fa-repeat"></i>
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-mobile"></i>
          </div>
          <p>Brand : {brand}</p>
          <p>Category : {category}</p>
          <input className="number-input" type="number" placeholder="1" min="1" max="10" />
          <div className="product-button">
            <NavLink to="/addtocart">
              <button onClick={() => addToCart(image, title, price, id)}>
                ADD TO CART
              </button>
            </NavLink>
            <AddToCart image={image} title={title} price={price} id={id} />
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;