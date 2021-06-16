import React, { useState, useContext, useEffect } from 'react';
import Project from '../components/Project';
function Projects() {
    //api call to github here-- or! api call on app.js and pass props
    //api results.map passing proper props into Project
    return (
        <>
        <Project/>
        </>
    );
}

export default Projects;