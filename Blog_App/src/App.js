import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Switch, Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Blog from './Component/Blog/Blog'
import About from './Component/AboutUs/About';
import Author from './Component/Author/Author';
import ContactUs from './Component/ContactUs/ContactUs';
import Auth from './Component/Auth/Auth';


const App = () => {

 
    return (
        <>
     
        <Router>
              <Navbar />
              <Switch>
                <Route exact  path='/'>
                    <Home />
                </Route>
               
            
              
              
             
               <Route path='/blog' exact component={Blog} />
               <Route path='/blog/search' exact component={Blog}  />
            
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/author'>
                    <Author />
                </Route>
                <Route path='/auth' exact component={Auth} />
                   
                   
                <Route path='/contactUs'>
                    <ContactUs />
                </Route>   
              </Switch>
          </Router>
      
        </>
    );
};

export default App;