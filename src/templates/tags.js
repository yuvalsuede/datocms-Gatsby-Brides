import React from 'react'
import { graphql } from 'gatsby'
import WebsiteLayout from "../components/website-layout"
import VendorList from "../components/vendor-list";

export default ({ data }) => {
    console.log(data);
    return (<WebsiteLayout>
        <>
            <VendorList
                vendors={data.allDatoCmsVendor}
            />
        </>
    </WebsiteLayout>)
}

export const query = graphql`
    query TagVendorQuery ($tag: JSON) {
        allDatoCmsVendor(
            filter: { hashtags: { glob: $tag }}, 
            limit: 1000, 
            sort: {fields: position}
        ) {
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
    }
`
