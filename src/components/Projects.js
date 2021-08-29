import React from 'react';
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby';
// import Img from "gatsby-image"
import { GatsbyImage , getImage } from "gatsby-plugin-image"


const Projects = () => {
  
 const queryData = useStaticQuery(graphql`
    query ProjectQuery {
      allProjectsJson {
        edges {
          node {
            img
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

// function BlogPost({ data }) {
//   const image = getImage(data.blogPost.avatar)
//   return (
//     <section>
//       <h2>{data.blogPost.title}</h2>
//       <GatsbyImage image={image} alt={data.blogPost.author} />
//       <p>{data.blogPost.body}</p>
//     </section>
//   )
//  }
    
 function getProjects(data) {
  
     const ProjectsArray = [];
    //  console.log(data);
          data.allProjectsJson.edges.forEach((item, index) => {
          // const image = getImage(item.node.img)
         ProjectsArray.push(
             <div key={index}>
                 <GatsbyImage image={item.node.img}
                 alt={item.node.name} 
                //  fluid={item.node.children.fluid}
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

