import Tabs from "./Tabs";
import Academics from "./Academics";
import Features from "./Features";
import Placements from "./Placements";
import Fest from "./Fest";
import Faculty from "./Faculty";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const AboutUs = () => {
    return ( 
        <Router>
            <div className="aboutus-container">
                <Tabs />
                <div className="tab-content">
                <Switch>
                    <Route exact path="/">
                        <Academics />
                    </Route>
                    <Route path="/Placements">
                        <Placements />
                    </Route>
                    <Route path="/Features">
                        <Features />
                    </Route>
                    <Route path="/Fest">
                        <Fest />
                    </Route>
                    <Route path="/Faculty">
                        <Faculty />
                    </Route>
                </Switch>
                </div>
            </div>
        </Router>
     );
}
 
export default AboutUs;