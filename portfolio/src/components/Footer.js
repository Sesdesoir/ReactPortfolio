import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { IconContext } from "react-icons";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillGithub} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
function Footer(props) {
    //  
    return (
        <>
         <div className="fixed-bottom">
            <Navbar>
                <Container style={{justifyContent: 'center', background: `linear-gradient(to right, #A587CA, #36CEDC, #8FE968, #FFEA56, #FFB750, #FE797B)`}}>
                
                    { document.location.pathname === "/" ?<p style={{fontFamily: 'Marck Script, cursive', fontWeight: 'bold'}}>About Me</p> :''}
                    { document.location.pathname === "/projects" ?<p style={{fontFamily: 'Marck Script, cursive', fontWeight: 'bold'}}>My Projects</p> :''}
                    { document.location.pathname === "/contact" ?<p style={{fontFamily: 'Marck Script, cursive', fontWeight: 'bold'}}>Contact Me</p> :''}
                    <IconContext.Provider value={{ size: '1.75em' }}>
                    <ListGroup horizontal >
                        <ListGroup.Item style={{background: 'none', border: 'none'}}><a href='https://www.linkedin.com/in/leslie-williams-0b84151b7/' target="_blank" rel="noopener noreferrer">LinkedIn<AiFillLinkedin/></a></ListGroup.Item>
                        <ListGroup.Item style={{background: 'none', border: 'none'}}><a href='https://github.com/Sesdesoir' target="_blank" rel="noopener noreferrer">Github<AiFillGithub/></a> </ListGroup.Item>
                        <ListGroup.Item style={{background: 'none', border: 'none'}}><a href='https://www.instagram.com/sesdesoir/' target="_blank" rel="noopener noreferrer">Instagram<AiFillInstagram/></a></ListGroup.Item>
                    </ListGroup>                    
                    </IconContext.Provider>       
                </Container>
            </Navbar>
            </div>
        </>
    );
}

export default Footer;