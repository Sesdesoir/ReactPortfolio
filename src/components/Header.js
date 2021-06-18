import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
function Header(props) {
    
    return (
        <>
            <Navbar bg="light" expand="lg" style={{background: `linear-gradient(to right, #A587CA, #36CEDC, #8FE968, #FFEA56, #FFB750, #FE797B)`}}>
                <Navbar.Brand href="/" style={{fontFamily: 'Marck Script, cursive', fontWeight: '570'}}>Leslie Williams</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/#/" style={{fontFamily: 'Marck Script, cursive', fontWeight: '570'}}>About Me</Nav.Link>
                        <Nav.Link href="/#/contact" style={{fontFamily: 'Marck Script, cursive', fontWeight: '570'}}>Contact</Nav.Link>
                        <Nav.Link href="/#/projects" style={{fontFamily: 'Marck Script, cursive', fontWeight: '570'}}>Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;