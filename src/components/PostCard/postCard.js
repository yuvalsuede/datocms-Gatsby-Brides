import * as React from "react"
import { Link } from "gatsby"
import _ from "lodash"
import Img from "gatsby-image"
import {
  PostCardWrapper,
  PostPreview,
  PostDetails,
  PostDate,
  PostTitle,
  Excerpt,
  PostContent,
  PostTags,
} from "./postCard.style"
import {OutboundLink} from "gatsby-plugin-google-analytics";


const PostCard = ({
  image,
  title,
  description,
  url,
  position,
  tags,
  className,
  imageType,
  placeholderBG,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ["post_card"]

  // className prop checking
  if (className) {
    addAllClasses.push(className)
  }

  return (
    <PostCardWrapper className={addAllClasses.join(" ")} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
            {imageType === "fluid" ? (
              <Img
                fluid={image}
                alt="post preview"
                backgroundColor={placeholderBG}
              />
            ) : (
              <Img
                fixed={image}
                alt="post preview"
                backgroundColor={placeholderBG}
              />
            )}
          </Link>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        {position && (
          <PostDate
            dangerouslySetInnerHTML={{
              __html: position,
            }}
            className="post_date"
          />
        )}

        <PostContent className="post_content">
          <PostTitle className="post_title">
            <OutboundLink
                target="_blank"
                href={url}
            >
              {title}
            </OutboundLink>
          </PostTitle>

          {description && (
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              className="excerpt"
            />
          )}

          {tags == null ? null : (
            <PostTags className="post_tags">
              {tags.map((tag, index) => (
                <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </Link>
              ))}
            </PostTags>
          )}
        </PostContent>
        <PostPreview className="post_preview">
          <Img
              fluid={image.fluid}
              alt="post preview"
              backgroundColor={placeholderBG}
              css={{
                width: '100px',
                height: '100px',
              }}
          />
        </PostPreview>
      </PostDetails>
    </PostCardWrapper>
  )
}

PostCard.defaultProps = {
  imageType: "fluid",
}

export default PostCard
