import React from "react"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from '../components/global/BackgrondSection'
import Info from '../components/home/Info'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Regular Jorge's"></BackgroundSection>
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img:file(relativePath:{eq:"default-background.jpeg"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
