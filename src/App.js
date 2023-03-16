// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import './style.css'
import LandingPagecomp from './LandingPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <div className='App'>
      {/* <BrowserRouter basename={window.location.pathname || ''}> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LandingPagecomp category='general'/>}></Route>
          <Route exact path='/general' element={<LandingPagecomp category='general'/>}></Route>
          <Route exact path='/sports' element={<LandingPagecomp category='sports'/>}></Route>
          <Route exact path="/business" element={<LandingPagecomp category="business" />}></Route>
          <Route exact path="/entertainment" element={<LandingPagecomp category="entertainment" />}></Route>
          <Route exact path="/health" element={<LandingPagecomp category="health" />}></Route>
          <Route exact path="/science" element={<LandingPagecomp category="science" />}></Route>
          <Route exact path="/technology" element={<LandingPagecomp category="technology" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
