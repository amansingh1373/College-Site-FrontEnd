import Header from "./Header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutUs from "./AboutUs";
import Admission from "./Admission";
import ContactUs from "./ContactUs";
import Gallery from "./Gallery";
import Footer from "./Footer";

const App = () => {
  return ( 
    <Router>
      <div className="container">
        <Header />
        <div className="contents">
          <Switch>
            <Route exact path="/">
              <AboutUs />
            </Route>
            <Route path="/Admission">
              <Admission />
            </Route>
            <Route path="/ContactUs">
              <ContactUs />
            </Route>
            <Route path="/Gallery">
              <Gallery />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
   );
}
 
export default App;
