import React from 'react'
import { graphql } from 'gatsby'
import WebsiteLayout from "../components/website-layout"

export default ({ data }) => (

    <WebsiteLayout>
        <h1>{data.datoCmsCategory.name}</h1>
    </WebsiteLayout>
)

export const query = graphql`
    query CategoryQuery($slug: String!) {
        datoCmsCategory(slug: { eq: $slug }) {
            name
        }
    }
`
