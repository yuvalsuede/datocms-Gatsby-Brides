import * as React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {
  FeaturedPostWrapper,
  PostPreview,
  PostDetails,
  PostTitle2,
} from "./featurePost.style"


const FeaturedPost = ({
  image,
  title,
  url,
  tags,
  className,
  imageType,
  placeholderBG,
  ...props
}) => {
  const addAllClasses = ["featured_post"]

  // className prop checking
  if (className) {
    addAllClasses.push(className)
  }

  return (
    <FeaturedPostWrapper className={addAllClasses.join(" ")} {...props}>
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

      <PostDetails>
        <PostTitle2 className="post_title">
          <Link
          css={{
            color: '#9055a2 !important' ,
            margin: '0 20px',
          }}
              to={url}>{title}</Link>
        </PostTitle2>
      </PostDetails>
    </FeaturedPostWrapper>
  )
};

FeaturedPost.defaultProps = {
  imageType: "fluid",
}

export default FeaturedPost
