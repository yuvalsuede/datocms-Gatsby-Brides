import React from 'react'
import { graphql } from 'gatsby'
import WebsiteLayout from "../components/website-layout"
import Hero from "../components/hero";
import VendorList from "../components/vendor-list";
import Article from "../components/article";

export default ({ data }) => (

    <WebsiteLayout>
        <>
            <Hero
                topDescription={data.datoCmsCategory.topDescription}
                topLongDescription={data.datoCmsCategory.topLongDescription}
                fluid={data.datoCmsCategory.cover.fluid} />
            <VendorList
                vendors={data.allDatoCmsVendor}
                category={data.datoCmsCategory}
            />
            <Article
                article={data.datoCmsCategory.mainArticle}
            />
        </>
    </WebsiteLayout>
)

export const query = graphql`
    query CategoryQuery($slug: String!) {
        allDatoCmsVendor(sort: {order: ASC, fields: position}, filter: {category: {elemMatch: {slug: {eq: $slug}}}}) {
            edges {
                node {
                    id
                    slug
                    name
                    position
                    mainLink
                    description
                    hashtags
                    thumbnailImage {
                        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
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
            mainArticle {
                ... on DatoCmsTitleBlock {
                    id
                    mainTitle
                }
                ... on DatoCmsContent {
                    id
                    mainParagraph
                }
            }
        }
    }
`
