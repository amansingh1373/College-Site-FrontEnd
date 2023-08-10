import { useState } from "react";

const ContactUs = () => {

    const [name,setName] = useState("");
    const [desc,setDesc] = useState("");

    return ( 
        <div className="contactus-container">
            <div className="heading">
                Visit Us Here!
            </div>
            <div className="social-links">
                <div className="social-links-items">
                    <div className="item-left youtube">
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                    <div className="item-right">
                        visit us on youtube &nbsp;<a className="verzeo-yellow" href="https://www.youtube.com/c/Verzeo">Here</a>
                    </div>
                </div>
                
                <div className="social-links-items">
                    <div className="item-left instagram">
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div className="item-right">
                        visit us on instagram &nbsp;<a className="verzeo-yellow" href="https://www.instagram.com/verzeo/?hl=en">Here</a>
                    </div>
                </div>
                
                <div className="social-links-items">
                    <div className="item-left linked-in">
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div className="item-right">
                        visit us on linked in &nbsp;<a className="verzeo-yellow" href="https://www.linkedin.com/company/verzeo/?originalSubdomain=in">Here</a>
                    </div>
                </div>
                
                <div className="social-links-items">
                    <div className="item-left twitter">
                        <i className="fa-brands fa-square-twitter"></i>
                    </div>
                    <div className="item-right">
                        visit us on twitter &nbsp;<a className="verzeo-yellow" href="https://twitter.com/verzeo1?lang=en">Here</a>
                    </div>
                </div>
            </div>
            <div className="heading">
                Any Queries
            </div>
            <div className="wrapper">
                <div className="form">
                    <form>
                        <label for="name" className="label">Your Name:</label>
                        <div className="form-element">
                            <input type="text" className="text-feild" name="name"  value={name} onChange={(e) => setName(e.target.value ) }/>
                        </div>
                        <label for="name" className="label">ask a question:</label>
                        <div className="form-element" name="name" >
                            <textarea className="text-area"  value={desc} onChange={(e) => setDesc(e.target.value ) }></textarea>
                        </div>
                        <div className="button-container">
                            <button class="button blue">ask</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default ContactUs;