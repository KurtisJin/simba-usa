import React from 'react';
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby';
// import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"


const Projects = () => {

 const queryData = useStaticQuery(graphql`
    query ProjectQuery {
      allProjectsJson {
        edges {
          node {
            alt
            button
            name
            img
            children {
              ... on ImageSharp {
                id
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
 `)

// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

// export const query = graphql`
//   {
//     allProjectsJson {
//       edges {
//         node {
//           alt
//           button
//           img
//         }
//       }
//     }
//   }
// `

// export default ComponentName
    
 function getProjects(data) {
     const ProjectsArray = [];
    //  console.log(data);
     data.allProjectsJson.edges.forEach((item, index) => {
         ProjectsArray.push(
             <div key={index}>
                 <GatsbyImage src={item.node.img}
                 fluid={item.node.children.fluid}
                 /> 
             </div>
         )
     })
     return ProjectsArray
 }
    return(

        <ProjectContainer>
            <ProjectHeading>ProjectHeading</ProjectHeading>
            <ProjectWrapper>{getProjects(queryData)}</ProjectWrapper>
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

