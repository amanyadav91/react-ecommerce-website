import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigation = ({title}) =>{
    return(
        <>
        <div className="page-navigation">
           <NavLink to="/product" className="navigation-item">Product</NavLink>/Product-Detail-Page
        </div>
        </>
    )
}
export default PageNavigation;