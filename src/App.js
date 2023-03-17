// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import './style.css'
import LandingPagecomp from './LandingPage';
import {Route} from "react-router-dom";

function App() {

  return (
    <div className='App'>
      
      {/* <BrowserRouter basename={process.env.PUBLIC_URL + '/'}> */}
        
          <Route exact path='/' element={<LandingPagecomp category='general'/>}></Route>
          <Route path='/general' element={<LandingPagecomp category='general'/>}></Route>
          <Route path='/sports' element={<LandingPagecomp category='sports'/>}></Route>
          <Route path="/business" element={<LandingPagecomp category="business" />}></Route>
          <Route path="/entertainment" element={<LandingPagecomp category="entertainment" />}></Route>
          <Route path="/health" element={<LandingPagecomp category="health" />}></Route>
          <Route path="/science" element={<LandingPagecomp category="science" />}></Route>
          <Route path="/technology" element={<LandingPagecomp category="technology" />}></Route>
        
    </div>
  );
}

export default App;
