import React from "react";

const Footer = () =>{
    return(
        <>
            <div className="footer">
                <div className="text">
                <p className="head">About Us</p>
                <p >We care of your money provide quality <br/>
                  product with affordable price</p>
                 
                </div>
                <div className="text">
                <p className="head">Subscribe to get important <br/> update</p>
                <form action="https://formspree.io/f/meqyqonr" method="POST">
                <input name="email" type="text" placeholder="Email" required/> <br/>
                <button  value="submit" type="submit">Subscribe</button>
                </form>
                 

                </div>
                <div className="text">
                <p className="head">Follow Us</p>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
                </div>
                <div className="text">
                <p className="head">Call Us</p>
                <p>+91 973280995</p>
                 

                </div>
            </div>

            <div className="footer-bottom">
                <p>@{new Date().getFullYear()} By Aman Yadav</p>
                <div >
                    <p>Privacy Policy @2024</p>
                    <p>Term & Condition</p>
                </div>
            </div>
        </>
    )
}
export default Footer;