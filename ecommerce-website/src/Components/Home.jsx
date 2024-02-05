import React from "react";
import { NavLink } from "react-router-dom";
import mainImg from "./images/mainImg.webp"
import Footer from "./Footer";
import shoe21 from "./images/shoe21.jpg"
import shoe3 from "./images/shoe3.jpg"
import shoe12 from "./images/shoe12.jpg"
import shoe10 from "./images/shoe10.jpg"


const Home = () => {


    return (
        <>

            <div className="main">
                <div className="mainText">
                    <p className="main-head">Fashion that cares.<br /> Comfort that inspires. </p>
                    <p>Our innovation is fueled by the choices of an increasingly <br />
                        earth-conscious consumer and hence we strive to innovate <br />
                        using natural and sustainable materials that are good for <br />
                        the people and the planet.</p>
                    <NavLink to="./product"><button className="explore-btn">Explore..</button></NavLink>
                </div>
                {/* <img src={mainImg} alt="" id="mainImage"></img> */}
                <img src={mainImg} />
            </div>

            <div className="featured">
                <div className="feature-head">
                    <h1>Featured Product's</h1>
                </div>
                <div className="featureCard">
                    <NavLink to="/product" className="card-feature">
                    <div className="card" >
                        <img src={shoe3} />
                        <p>Campus Sports Shoe</p>
                    </div>
                    </NavLink>
                    <NavLink to="/product" className="card-feature">
                    <div className="card">
                        <img src={shoe21} />
                        <p>Women Heel's</p>
                    </div>
                    </NavLink>
                    <NavLink to="/product" className="card-feature">
                    <div className="card">
                        <img src={shoe12} />
                        <p>Nike Shoes</p>
                    </div>
                    </NavLink>
                    <NavLink to="/product" className="card-feature">
                    <div className="card">
                        <img src={shoe10} />
                        <p>Nike Heels</p>
                    </div>
                    </NavLink>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;