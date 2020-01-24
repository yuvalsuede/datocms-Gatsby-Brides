import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FeaturePost from "../FeaturePost/featurePost"
import { FeaturePosts, Title } from "./style";


const FeaturePostsContainer = () => {

    const Data = useStaticQuery(graphql`
        query {
            allDatoCmsCategory {
                edges {
                    node {
                        id
                        cover {
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
                        }
                        heName
                        slug
                    }
                }
            }        
        }
    `);

    const categories = [...Data.allDatoCmsCategory.edges].slice(0,5);

    return (
        <FeaturePosts>
        <Title>הנבחרת של Brides</Title>
        {categories.map(({ node }) => {
            const title = node.heName;
            //Random Placeholder Color

            console.log(node.heName);
            return (
                <FeaturePost
                    key={node.heName}
                    title={title}
                    image={
                        node.cover == null
                            ? null
                            : node.cover.fluid
                    }
                    url={node.slug}
                />
            )
        })}
        </FeaturePosts>)
};
export default FeaturePostsContainer;


