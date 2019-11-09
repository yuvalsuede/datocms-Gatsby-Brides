import React from 'react'
import { graphql } from 'gatsby'
import WebsiteLayout from "../components/website-layout"
import Hero from "../components/hero";

export default ({ data }) => (

    <WebsiteLayout>
        {/*<h1>{data.datoCmsCategory.name}</h1>*/}
        <Hero
            topDescription={data.datoCmsCategory.topDescription}
            topLongDescription={data.datoCmsCategory.topLongDescription}
            fluid={data.datoCmsCategory.cover.fluid} />
    </WebsiteLayout>
)

export const query = graphql`
    query CategoryQuery($slug: String!) {
        datoCmsCategory(slug: { eq: $slug }) {
            name
            slug
            topDescription
            topLongDescription
            cover {
                fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                    ...GatsbyDatoCmsFluid
                }
            }
        }
    }
`
