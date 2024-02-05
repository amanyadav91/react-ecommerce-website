import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import heels from "./images/heels.png"
// import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () =>{
    // const { loginWithRedirect } = useAuth0();
    const [showItem, setshowItem] = useState(false)
    const showNav = () =>{
        setshowItem(true)
    }
    const hideNav = () =>{
        setshowItem(false)
    }
    return(
        <>

        <nav className={showItem ? "show-navitems" : "hide-navitems"} >
            <div className="logo">
                <h1>TrendyShoe</h1>
                <img src={heels} alt="Heel"/>
            </div>
            <ul>
            

                <li><NavLink onClick={()=>setshowItem(false)} className="nav-items" to="/">Home</NavLink></li>
                <li><NavLink onClick={()=>setshowItem(false)} className="nav-items" to="/about">About</NavLink></li>
                <li><NavLink onClick={()=>setshowItem(false)} className="nav-items" to="/product">Products</NavLink></li>
                <li><NavLink onClick={()=>setshowItem(false)} className="nav-items" to="contact">Contact</NavLink></li>
                <li><NavLink onClick={()=>setshowItem(false)} className="nav-items" to="login" >Log In</NavLink></li>
                <li><NavLink onClick={()=>setshowItem(false)} className="nav-items" to="/addtocart"><i class="fa-solid fa-cart-shopping"></i></NavLink></li>
            </ul>
            <div className="icons">
            <i onClick={showNav} id="bar-icon" class="fa-solid fa-bars"></i>
            <i onClick={hideNav} id="cross-icon" class="fa-solid fa-xmark"></i>

            </div>
        </nav>
        </>
    )
}
export default Navbar;