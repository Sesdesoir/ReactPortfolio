import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
//images
import plantsy from '../images/projectImages/plantsy.png';
import techBlog from '../images/projectImages/tekkie-blog.png';
import TeamBuilder from '../images/projectImages/Team-Builder.png';
import pjUno from '../images/projectImages/webDevelopmentSuccess.png';
//we'll have to use a github api call to dynamically get my github
//repositories
function Project(props) {
    

    return (
        <>
        <Container >
            <Row style={{margin: '2rem 0 0 3rem', alignContent: 'center'}}>
                <Col md={4} style={{backgroundColor: 'rgb(210,188,134, .6)'}}>
                <Image src={plantsy} rounded fluid/>
                </Col>
                <Col style={{padding: '0'}}>
                    <Card style={{ width: '18rem', borderColor: 'rgb(210,188,134 , .5)'  }}>
                    <Card.Header style={{backgroundColor: 'rgb(155,204,202 , .75)', fontFamily: 'Marck Script, cursive', fontWeight: '500'}}>Project Plantsy</Card.Header>
                        <Card.Body style={{backgroundColor: 'rgb(231,215,179 , .5)'}}>
                            <Card.Subtitle className="mb-2 text-muted">About Plantsy</Card.Subtitle>
                            <Card.Text>
                                Plantsy is one of my prides and joys. It has a special place in my heart for teaching me so much with the company of great people.
                                The goal is to keep tinkering and adding things to Plantsy with my other project buddies. 
                                It's an app with the goal of being a place to keep track of your plants.
                            </Card.Text>
                            <Card.Link href="https://plantsyapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">Heroku Deployment</Card.Link>
                            <Card.Link href="https://github.com/theadamhorn/plantsy" target="_blank" rel="noopener noreferrer">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{margin: '2rem 0 0 3rem'}}>
                <Col md={4} style={{backgroundColor: 'rgb(210,188,134, .6)'}}>
                <Image src={pjUno} rounded fluid/>
                </Col>
                <Col style={{padding: '0'}}>
                    <Card style={{ width: '18rem', borderColor: 'rgb(210,188,134 , .5)'  }}>
                    <Card.Header style={{backgroundColor: 'rgb(155,204,202 , .75)', fontFamily: 'Marck Script, cursive', fontWeight: '500'}}>Web Development Success</Card.Header>
                        <Card.Body style={{backgroundColor: 'rgb(231,215,179 , .5)'}}>
                            <Card.Subtitle className="mb-2 text-muted">About Web Development Success</Card.Subtitle>
                            <Card.Text>
                                This was my first group project. It was mostly focused on api calls, routes, grabbing and handling data.
                                We used Bulma as our html framework. One of the api calls wont work through github pages as github requres an https call and the api was only an http. Quite depressing. Project still works aside from the one api!   
                            </Card.Text>
                            <Card.Link href="https://sesdesoir.github.io/GroupPjUno/" target="_blank" rel="noopener noreferrer">Github Pages</Card.Link>
                            <Card.Link href="https://github.com/Sesdesoir/GroupPjUno" target="_blank" rel="noopener noreferrer">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{margin: '2rem 0 0 3rem'}}>
                <Col md={4} style={{backgroundColor: 'rgb(210,188,134, .6)'}}>
                <Image src={TeamBuilder} rounded fluid/>
                </Col>
                <Col style={{padding: '0'}}>
                    <Card style={{ width: '18rem', borderColor: 'rgb(210,188,134 , .5)'  }}>
                    <Card.Header style={{backgroundColor: 'rgb(155,204,202 , .75)', fontFamily: 'Marck Script, cursive', fontWeight: '500'}}>Team Profile Builder</Card.Header>
                        <Card.Body style={{backgroundColor: 'rgb(231,215,179 , .5)'}}>
                            <Card.Subtitle className="mb-2 text-muted">About Team Profile Builder</Card.Subtitle>
                            <Card.Text>
                                This isn't a webpage it is a command line app that takes input for various bits of information then creates an html file for a static webpage to display the information.
                                I very much enjoyed setting this up and I was quite pleased with the results. Perhaps it's not as exciting as I feel about it, but I feel like the concept has potential to do great things.
                            </Card.Text>
                            <Card.Link href="https://github.com/Sesdesoir/TeamProfileBuilder" target="_blank" rel="noopener noreferrer">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{margin: '2rem 0 0 3rem'}}>
                <Col md={4} style={{backgroundColor: 'rgb(210,188,134, .6)'}}>
                <Image src={techBlog} rounded fluid/>
                </Col>
                <Col style={{padding: '0'}}>
                    <Card style={{ width: '18rem', borderColor: 'rgb(210,188,134 , .5)'  }}>
                    <Card.Header style={{backgroundColor: 'rgb(155,204,202 , .75)', fontFamily: 'Marck Script, cursive', fontWeight: '500'}}>Tech Blog</Card.Header>
                        <Card.Body style={{backgroundColor: 'rgb(231,215,179 , .5)'}}>
                            <Card.Subtitle className="mb-2 text-muted">About Tech Blog</Card.Subtitle>
                            <Card.Text>
                                This particular project was more about database back end structure than front end application and aesthetics. I found a joy in dealing with databases in this project. I still quite like setting up data structures. 
                            </Card.Text>
                            <Card.Link href="https://tekkie-blog.herokuapp.com/" target="_blank" rel="noopener noreferrer">Heroku Deployment</Card.Link>
                            <Card.Link href="https://github.com/Sesdesoir/tech-blog" target="_blank" rel="noopener noreferrer">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Project;