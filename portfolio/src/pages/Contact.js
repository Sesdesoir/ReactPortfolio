import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import flutepic from '../images/flute.jpg';   
function Contact(props) {
    
    return (
        <>
            <Container style={{backgroundImage: `url(${flutepic})` , backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width:'100vw', height: '100vh', maxWidth: '100vw'}}>
                <Row style={{paddingTop: "2rem"}}>
                    <Col md={2}></Col>
                    <Col>
                        <Form style={{backgroundColor: 'rgb(148,139,140, .7)', padding:'1rem 1.5rem 1rem 1.5rem'}}>
                            <Row>
                                <Col>   
                                    <Form.Group className="mb-3" controlId="FormName">
                                        <Form.Label style={{fontFamily: 'Marck Script, cursive', fontWeight: 'bold'}}>Name</Form.Label>
                                        <Form.Control type="email" placeholder="Name" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label style={{fontFamily: 'Marck Script, cursive', fontWeight: 'bold'}}>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@email.com"/>
                                    </Form.Group>
                                </Col> 
                            </Row>
                            <Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{fontFamily: 'Marck Script, cursive', fontWeight: 'bold'}}>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Row>
                        </Form>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        </>
    );
}

export default Contact;