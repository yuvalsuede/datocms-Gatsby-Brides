import React from 'react'
import { graphql } from 'gatsby'
import WebsiteLayout from "../components/website-layout"
import Hero from "../components/hero";
import FeaturePostsContainer from "../components/FeaturePosts/featurePosts";

export default ({ data }) => {

    console.log(data);
    return (
        <WebsiteLayout>
            <>
                <Hero
                    topDescription={data.allDatoCmsHome.nodes[0].title}
                    fluid={data.allDatoCmsHome.nodes[0].coverImage.fluid}
                    children={ <FeaturePostsContainer /> }
                />

            </>

        </WebsiteLayout>
        )

}


export const query = graphql`
  query Home {
      allDatoCmsHome {
          nodes {
              title
              coverImage {
                  size
                  width
                  height
                  path
                  format
                  isImage
                  createdAt
                  url
                  notes
                  author
                  copyright
                  originalId
                  alt
                  title
                  customData
                  fluid {
                      base64
                      tracedSVG
                      aspectRatio
                      width
                      height
                      src
                      srcSet
                      sizes
                  }
                  fixed {
                      base64
                      tracedSVG
                      aspectRatio
                      width
                      height
                      src
                      srcSet
                      sizes
                  }
              }
              introText
              meta {
                  createdAt
                  updatedAt
                  publishedAt
                  firstPublishedAt
                  isValid
                  status
              }
          }
      }
  }

`

