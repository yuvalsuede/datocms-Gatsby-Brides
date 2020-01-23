import React from 'react'
import { graphql } from 'gatsby'
import WebsiteLayout from "../components/website-layout"
import Hero from "../components/hero";
import VendorList from "../components/vendor-list";
import Article from "../components/article";
import Iframe from 'react-iframe'

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
            <Iframe
                css={{
                    position: 'relative',
                    display: 'initial',
                    width: '100%',
                    maxWidth: '600px',
                    margin: '0 auto',
                    marginTop: '50px',
                    border: 0,
                }}
                url="https://www.opinionstage.com/api/v1/widgets/605692/iframe"
                    width="100%"
                    height="607px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    allowFullScreen
                    position="relative"/>
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
