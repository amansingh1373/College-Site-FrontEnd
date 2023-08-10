import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const Tabs = () => {

    const [prevval,setPrevval] = useState("Academics");

    const handleClick = (e) => {
        
        document.getElementById(prevval).style.borderBottom = "none";
        document.getElementById(prevval).style.fontWeight = "normal";

        document.getElementById(e.target.id).style.borderBottom = "2px solid gray";
        document.getElementById(e.target.id).style.fontWeight = "bold";
        setPrevval(e.target.id);
    }

    useEffect(()=>{
        document.getElementById("Academics").style.borderBottom = "2px solid gray";
        document.getElementById("Academics").style.fontWeight = "bold";
    },[]);

    return ( 
        <div className="tabs-container">
            <div className="tab-items">
                <Link to = "/"  id="Academics" onClick={handleClick}>Academics</Link>
            </div>
            <div className="tab-items">
                <Link to = "/Placements"  id="placements" onClick={handleClick}>Placements</Link>
            </div>
            <div className="tab-items" >
                <Link to = "/Features" id="Features" onClick={handleClick}>Features</Link>
            </div>
            <div className="tab-items">
                <Link to = "/Fest"  id="Fest" onClick={handleClick}>Fest</Link>
            </div>
            <div className="tab-items">
                <Link to = "/Faculty"  id="Faculty"  onClick={handleClick}>Faculty</Link>
            </div>
        </div>
     );
}
 
export default Tabs;