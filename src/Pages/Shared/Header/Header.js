import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../images/logo.png"
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';




const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
      signOut(auth);
    }
    

 
   
    return (
        <>
        
        <Navbar bg="dark" sticky="top" variant="dark ">
            <Container>
            <Navbar.Brand as ={Link} to="/">
                <img src={logo} height ="50" alt =" " />
            </Navbar.Brand>
            <Nav className="me-auto col-sm-12 col-md-6">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#clients">Clients</Nav.Link>
            <Nav.Link href="blogs">Blogs</Nav.Link>
            <Nav.Link as ={Link} to="about">About Me</Nav.Link>

            {
                user ?
                <button onClick={handleSignOut}>Sign Out</button>
                :
            <Nav.Link as ={Link} to="logIn">Log In</Nav.Link>
            }
             
            </Nav>
            </Container>
        </Navbar>
        </>
      
       
    );
};

export default Header;