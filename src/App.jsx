import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FeaturesComp from "./components/FeaturesComp";
import GetStarted from "./components/GetStarted";
import LandingPage from "./components/LandingPage";
import NavbarComp from "./components/NavbarComp";
import PlanComp from "./components/PlanComp";
import Footer from "./components/Footer";
import SubscribeNow from "./components/SubscribeNow";

const App = () => {
    return (
        <Router>
           <NavbarComp/>
           <LandingPage/>
           <FeaturesComp/>
           <PlanComp/>
           <GetStarted/>
           <SubscribeNow/>
           <Footer/>
          
           <Switch>
            {/* <Route path="/" exact component={Home}
           <Route path="/about" component={About}/>
           <Route path="/faqs" component={FAQ}/>
           <Route path="/pricing" component={Pricing}/>
           <Route path="/testimonials" component={Testimonials}/> */}
           </Switch>
        </Router>
    )
}

export default App





















