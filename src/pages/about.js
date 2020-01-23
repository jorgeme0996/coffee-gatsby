import React from "react"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from '../components/global/BackgrondSection'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="About Regular Jorge's" styleClass="about-background"></BackgroundSection>
  </Layout>
)

export const query = graphql`
  {
    img:file(relativePath:{eq:"about-background.jpeg"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage