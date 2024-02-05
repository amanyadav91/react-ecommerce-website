import React, { useEffect, useState } from "react";
import Footer from "./Footer";
// import axios from "axios";
// import { NavLink } from "react-router-dom";
import Card from "./Card";
import { API } from "./API";
 

const Products = () => {
  const [APIData] = useState(API);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");
  const [selectCategory, setSelectCategory] = useState("")

  

//   search Filter
  const searchData = (event) =>{
    setSearchValue(event.target.value);
  }
  
  const filterSearchValue = APIData.filter((currentData)=>{ 
        return  currentData.title.toLowerCase().includes(searchValue);
                 
  });


   //    Category Filter
   const categoryFiltering = (event) =>{
    setCategory(event.target.value)
  }

   if(category == ""){
      
   }
  if(category == "Price Low To High"){
    APIData.sort((a,b)=>{
        return a.price-b.price
    })

  }
  
  if(category == "Price High To Low"){
    APIData.sort((a,b)=>{
        return b.price-a.price
    })

  }
  
  if(category == "Products A To Z"){
    APIData.sort((a,b)=>{
        let nameA = a.title;
        let nameB = b.title;

        if(nameA<nameB){
            return -1
        }
        return 0
    })
      

  }
     
//   SELECT FILTERING
    const selectItem = (event) =>{
    setSelectCategory(event.target.value)
     
    }
    console.log(selectCategory);
    // select filter
    let selectFilter = APIData.filter(({title,category, brand, price,color})=>{
              return   category == selectCategory ||
                       price == selectCategory ||
                       color == selectCategory;
      
   })
   
     
  const filteringData = (APIData, searchValue, category, selected)=>{
    let filterProduct = APIData;
    if(searchValue){
        filterProduct = filterSearchValue;
    }
    if(category){
        filterProduct = APIData;
    }
    if(selected){
        filterProduct =  selectFilter;
         
    }

    console.log(filterProduct);
    return filterProduct.map(({image, title, price,id,review})=>{
           return <Card key={id}
            image={image}
            title={title}
            price={price}
            review={review}
            id={id}
           />
    })
  }

   
  //  console.log(filteringData(APIData, searchValue, category, selectCategory));
 let result = filteringData(APIData, searchValue, category, selectCategory)
 

   
 
 
 

  return (
    <>
      <div className="product-page">
         
        <div className="product-filters">
          <div className="search-bar">
           
            <input type="text" placeholder="Search Here." value={searchValue} onChange={searchData} id="searchBar" />
          </div>
          <div className="search-filter">
            <label>Sort By : </label>
            <select name="category" onChange={categoryFiltering} id="category">
              <option value="" >All</option> 
              <option value="Price High To Low">Price High To Low</option>
              <option value="Price Low To High">Price Low To High</option>
              <option value="Products A To Z">Products A To Z</option>
            </select>
          </div>
        </div>

        <div className="products">
        <div className="side-item">
        
          <div className="sideItem-List">
          <ul className="categories">
             
            <div className="label-container">
            <p className="category-head">Categories:</p>
            <label>
                <input onChange={selectItem} type="radio" value="" name="test"/>All
            </label> <br/>
            <label>
                <input onChange={selectItem} type="radio" value="sports" name="test"/>Sports
            </label> <br/>
            <label>
                <input onChange={selectItem} type="radio" value="sneakers" name="test"/>Sneakers
            </label> <br/>
            <label>
                <input onChange={selectItem} select type="radio" value="heels" name="test"/>Heels
            </label> <br/>
            </div>
           
            
            <div className="label-container">
            <p className="category-head">Price:</p>
            <label>
                <input onChange={selectItem} type="radio" value="" name="test"/>All
            </label> <br/> 
            <label>
                <input onChange={selectItem} type="radio" value="500" name="test"/>₹0-500
            </label> <br/>
            <label>
                <input onChange={selectItem} type="radio" value="1000" name="test"/>₹500-1000
            </label> <br/>
            <label>
                <input onChange={selectItem} select type="radio" value="2000" name="test"/>Over ₹1000 
            </label> <br/>
            </div>
           
            
            <div className="label-container">
            <p className="category-head">Colors:</p>
            <label>
                <button className="color-btn" id="allColor" onClick={selectItem} value="" name="test"/>All
            </label> <br/>
            <label>
                <button className="color-btn" id="redBtn" onClick={selectItem} value="red" name="test"/>Red
            </label> <br/>
            <label>
                <button className="color-btn" id="blueBtn" onClick={selectItem}   value="blue" name="test"/>Blue
            </label> <br/>
            <label>
                <button className="color-btn" id="greenBtn" onClick={selectItem}  value="green" name="test"/>Green
            </label> <br/>
            </div>
          </ul> 
           
          </div>
           
          
        </div>
            
           <div className="product-list">
            {result}  
          </div> 

        </div>
      </div>
      <Footer />
    </>
  );
};
export default Products;


