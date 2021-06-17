import React from 'react';
import Container from 'react-bootstrap/Container'; 
import music from '../images/music.png';
import Selfie from '../images/Ses-selfie.jpg'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function Home(props) {
    
    return (
        <>
            <Container style={{backgroundImage: `url(${music})` , backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', width:'100vw', height: '100vh', maxWidth: '100vw'}}>
                <Row>
                    <Col md={4}>
                    <Card style={{ width: '18rem', backgroundColor: 'rgb(217,170,122, .5)'}}>
                        <Card.Header style={{textAlign: 'center', fontFamily: 'Marck Script, cursive', fontSize: '1.5em'}}>Who am I?</Card.Header>
                        <Image src={Selfie} roundedCircle />
                        <Card.Body>
                            <Card.Text>
                                My name is Leslie. I'm a musician. I've been playing flute for over 20 years, I can play some piano and I sing! I really love mathematics and science. I've been working in after school care for the last 5 years or so. Currently doing a form of that online over zoom.
                                I'm also a full stack web developer!
                            </Card.Text>
                        </Card.Body> 
                    </Card>
                    </Col>
                    <Col style={{padding: '0 0 0 5rem' , margin: '2rem 5rem 2rem 2rem'}}>
                    <Row>
                    <Card style={{ backgroundColor: 'rgb(217,170,122, .5)'}}>
                        <Card.Header style={{textAlign: 'center', fontFamily: 'Marck Script, cursive', fontSize: '1.5em'}}>Hobbies!</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <ul>
                                    <li>Playing My Instruments</li>
                                    <li>Arts & Crafts</li>
                                    <li>Doodling/Drawing</li>
                                    <li> Video Games</li>
                                    <li>Puzzles</li>
                                    <li>Solving Math Problems</li>   
                                </ul>
                            </Card.Text>
                        </Card.Body> 
                    </Card>
                    </Row>
                    <Row style={{marginTop: '2rem'}}>
                        <Card style={{backgroundColor: 'rgb(217,170,122, .5)'}}>
                        <Card.Header style={{textAlign: 'center', fontFamily: 'Marck Script, cursive', fontSize: '1.5em'}}>More About Me...</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <p>I studied french for 6 years. I am out of practice and have lost a lot of language, but still capable of reading and a decent amount of comprehension.</p>
                                <p>I don't really watch movies or tv/netflix/hulu etc. My time is spent on working, my hobbies, coding and friends.</p>
                            </Card.Text>
                        </Card.Body> 
                    </Card>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;