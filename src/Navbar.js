import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
function Navbarcomp() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/React-News-App/general">ShowMeNews</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/general">General</Nav.Link>
            <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
            <Nav.Link as={Link} to="/entertainment">Entertainment</Nav.Link>
            <Nav.Link as={Link} to="/business">Business</Nav.Link>
            <Nav.Link as={Link} to="/technology">Technology</Nav.Link>
            <Nav.Link as={Link} to="/science">Science</Nav.Link>
            <Nav.Link as={Link} to="/health">Health</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default Navbarcomp;


{/* <Link to={'/general'}>General</Link>
            <Link to={'/sports'}>Sports</Link>
            <Link to={'/entertainment'}>Entertainment</Link>
            <Link to={'/business'}>Business</Link>
            <Link to={'/technology'}>Technology</Link>
            <Link to={'/science'}>Science</Link>
            <Link to={'/health'}>Health</Link> */}