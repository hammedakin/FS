import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/HomePage'
import AcademyPage from './Pages/AcademyPage'
import ContactPage from './Pages/ContactPage';
import EnrolForm from './Components/Academy/EnrolForm';
import ProductPage from './Pages/ProductPage';
import Portfolio from './Components/Home/Portfolio';

function App() {
  return (
    
<>
<BrowserRouter>
  <Navbar/>

      <Switch>
      <Route exact path="/" component={Home}/>

      <Route exact path="/academy" component={AcademyPage}/>

      <Route exact path="/contact" component={ContactPage}/>

      <Route exact path="/enrol" component={EnrolForm}/>

      <Route exact path="/product" component={ProductPage}/>

      <Route exact path="/portfolio" component={Portfolio}/>
      </Switch>
    
    </BrowserRouter>


</>


  );
}

export default App;
