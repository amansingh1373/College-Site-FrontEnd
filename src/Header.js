import Navbar from "./Navbar";

const Header = () => {
    return ( 
        <div className="header-container">
            <div className="image-heading">
                <img className="image" src={ require('./images/college_campus.jpg')}></img>
                <div className="college-name">Verzeo College University</div>
            </div>
            <Navbar />
        </div>
     );
}
 
export default Header;
