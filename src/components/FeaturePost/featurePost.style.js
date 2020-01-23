import styled from "styled-components"
export const FeaturedPostWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  &:hover {
    .post_preview {
      > a {
        transform: scale(1.1);
      }
    }
  }
`

export const PostPreview = styled.div`
  flex: 0 0 90px;
  flex-shrink: 0;
  margin-right: 15px;
  overflow: hidden;
  @media (max-width: 990px) {
    flex: 0 0 60px;
  }
  > a {
    display: block;
    transition: 0.15s ease-in-out;
    transform-origin: top left;
  }
`

export const PostDetails = styled.div`
  flex-grow: 1;
`

export const PostTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;

  line-height: 1.53;
  margin-bottom: 0;

  @media (max-width: 990px) {
    font-size: 16px;
  }
  @media (max-width: 575px) {
    font-size: 14px;
  }
  a {
    transition: 0.15s ease-in-out;
    &:hover {
    }
  }
`


export const PostTitle2 = styled.h4`
  font-size: 16px;
  font-weight: 100;
    color: #000000 !important;
    font-weight: 400;
    font-size: 23px;
    line-height: normal;
`

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 12px;
  @media (max-width: 990px) {
    margin-top: 10px;
  }
  @media (max-width: 575px) {
    margin-top: 8px;
  }

  a,
  span {
    display: block;
    margin-right: 30px;
    font-size: 13px;
    font-weight: 400;
    @media (max-width: 990px) {
      font-size: 13px;
      margin-right: 25px;
    }
  }
`
