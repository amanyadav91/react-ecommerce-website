import React from "react";
import Footer from "./Footer";

const Contact = () =>{
    return(
        <>
            <div className="contact-page">
                <div className="contact-text">
                    <p>Feel Free To Connect Us</p>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59469.28249862106!2d76.1768143536082!3d21.31772649404696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd832de63ee1613%3A0xe72164fedc061d8b!2sBurhanpur%2C%20Madhya%20Pradesh%20450331!5e0!3m2!1sen!2sin!4v1703922230360!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location"></iframe>
            
                <div className="contact-form">
                    <form action="https://formspree.io/f/meqyqonr" method="POST">
                    <input name="username"  required autoComplete="off" type="text" placeholder="Username"/>
                    <input name="email"  required autoComplete="off" type="text" placeholder="Email"/>
                    <textarea name="message"  required autoComplete="off" rows="7" cols="37" placeholder="Enter Message"></textarea>
                    <button value="submit" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Contact;