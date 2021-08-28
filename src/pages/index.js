import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Projects />
  </Layout>
)

export default IndexPage
