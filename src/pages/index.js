import React from "react"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from '../components/global/BackgrondSection'
import Info from '../components/home/Info'
import Menu from '../components/home/Menu'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Regular Jorge's"></BackgroundSection>
    <Info />
    <Menu items={data.menu}/>
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

    menu: allContentfulCoffeeItem{
      edges{
        node{
          id
          title
          description{
            description
          }
          price
          image{
            fixed(width:50, height:50){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          category
        }
      }
    }

  }
`

export default IndexPage
