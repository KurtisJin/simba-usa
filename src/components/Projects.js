import React from 'react';
import styled from 'styled-components'

const Projects = () => {

    return(

        <ProjectContainer>
            <ProjectHeading>ProjectHeading</ProjectHeading>
            <ProjectWrapper>ProjectWrapper</ProjectWrapper>
        </ProjectContainer>

    )

}

export default Projects

const ProjectContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100wv-1300px)/2);
    background: red;
    color: #fff

`
const ProjectHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;

`
const ProjectWrapper = styled.div`


`

