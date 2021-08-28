import React from 'react';
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-plugin-image"

const Projects = () => {

 const data = useStaticQuery(graphql`
    query ProjectQuery {
        allProjectsJson {
        edges {
            node {
            alt
            button
            name
            img
            }
        }
        }
    }
 `)
    
 function getProjects(data) {
     const ProjectsArray = [];
     data.allProjectsJson.edges.forEach((item, index) => {
         ProjectsArray.push(
             <div ket={index}>
                 <Img src={item.node.img}/>
             </div>
         )
     })
     return ProjectsArray
 }
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

