import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Project from '../components/Project';
import colorMusic from '../images/ColorfulMusicx512.png';
function Projects() {
    //const [repositories, setRepositories] = useState([]);
    //api call to github here-- or! api call on app.js and pass props
    //api results.map passing proper props into Project
    return (
        <>
        <Container style={{backgroundImage: `url(${colorMusic})` , backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', width:'100vw', minHeight: '100vh', maxWidth: '100vw', paddingBottom: '10vh'}}>
        <Row >
        <Project/>
        </Row>
        </Container>
        </>
    );
}

export default Projects;