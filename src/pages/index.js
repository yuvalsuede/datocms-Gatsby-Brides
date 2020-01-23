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
      </>
    </WebsiteLayout>
);


export const query = graphql`
  query CategoryQuery($slug: String!) {
    
  }
`

