// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import './style.css'
import LandingPagecomp from './LandingPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <BrowserRouter basename='/React-News-App'>
      {/* <BrowserRouter> */}
        <Routes>
          <Route exact path='/React-News-App' Component={<LandingPagecomp category='general'/>}></Route>
          <Route path='/general' Component={<LandingPagecomp category='general'/>}></Route>
          <Route path='/sports' Component={<LandingPagecomp category='sports'/>}></Route>
          <Route path="/business" Component={<LandingPagecomp category="business" />}></Route>
          <Route path="/entertainment" Component={<LandingPagecomp category="entertainment" />}></Route>
          <Route path="/health" Component={<LandingPagecomp category="health" />}></Route>
          <Route path="/science" Component={<LandingPagecomp category="science" />}></Route>
          <Route path="/technology" Component={<LandingPagecomp category="technology" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
