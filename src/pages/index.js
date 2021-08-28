import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Hero"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    
  </Layout>
)

export default IndexPage
