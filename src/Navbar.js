import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar-container">
            <div className="nav-items">
                <Link to = "/">AboutUs</Link>
            </div>
            <div className="nav-items">
                <Link to = "/Admission">Admission</Link>
            </div>
            <div className="nav-items">
                <Link to = "/ContactUs">Contact Us</Link>
            </div>
            <div className="nav-items">
                <Link to = "/Gallery">Gallery</Link>
            </div>
        </div>
     );
}
 
export default Navbar;