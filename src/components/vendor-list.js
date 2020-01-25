import React from "react"
import colors from "../constants/colors";
import {mq} from "../constants/dimensions";
import PostCard from "./PostCard/postCard"; // to take image data and render it
import { TagPostsWrapper, TagPageHeading, TagName } from  "../templates/templates.style";
import SectionHead from "./SectionHead/sectionHead";
import _ from "lodash"


const VendorList = ({name, ...props}) => {
    const title = name || props.tag ?  `#${props.tag}` : _.get(props,'category.heName');
    return (

        <TagPostsWrapper>
            <SectionHead>{title}</SectionHead>
            {props.vendors.edges.map(({ node }, index ) => (
                <PostCard
                    key={node.slug}
                    title={node.name}
                    url={node.mainLink}
                    description={node.description || node.excerpt}
                    tags={node.hashtags}
                    position={`0${index+1}`.slice(-2)}
                    image={node.thumbnailImage}
                />
            ))}

        </TagPostsWrapper>
    )
}
export default VendorList
