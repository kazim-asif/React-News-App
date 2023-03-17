// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import './style.css'
import LandingPagecomp from './LandingPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <div className='App'>
      {/* <BrowserRouter basename='React-News-App'> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/React-News-App/' element={<LandingPagecomp category='general'/>}></Route>
          <Route path='/React-News-App/general' element={<LandingPagecomp category='general'/>}></Route>
          <Route path='/React-News-App/sports' element={<LandingPagecomp category='sports'/>}></Route>
          <Route path="/React-News-App/business" element={<LandingPagecomp category="business" />}></Route>
          <Route path="/React-News-App/entertainment" element={<LandingPagecomp category="entertainment" />}></Route>
          <Route path="/React-News-App/health" element={<LandingPagecomp category="health" />}></Route>
          <Route path="/React-News-App/science" element={<LandingPagecomp category="science" />}></Route>
          <Route path="/React-News-App/technology" element={<LandingPagecomp category="technology" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
