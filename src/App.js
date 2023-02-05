// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import './style.css'
import LandingPagecomp from './LandingPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  //api keys
//39c3025e706146f99c1db7b6e2295f6e
//dbe57b028aeb41e285a226a94865f7a7
//4dbc17e007ab436fb66416009dfb59a8

  const apiKey = '4dbc17e007ab436fb66416009dfb59a8'

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPagecomp apiKey={apiKey} category='general'/>}></Route>
          <Route path='/general' element={<LandingPagecomp apiKey={apiKey} category='general'/>}></Route>
          <Route path='/sports' element={<LandingPagecomp apiKey={apiKey} category='sports'/>}></Route>
          <Route path="/business" element={<LandingPagecomp apiKey={apiKey} category="business" />}></Route>
          <Route path="/entertainment" element={<LandingPagecomp apiKey={apiKey} category="entertainment" />}></Route>
          <Route path="/health" element={<LandingPagecomp apiKey={apiKey} category="health" />}></Route>
          <Route path="/science" element={<LandingPagecomp apiKey={apiKey} category="science" />}></Route>
          <Route path="/technology" element={<LandingPagecomp apiKey={apiKey} category="technology" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
