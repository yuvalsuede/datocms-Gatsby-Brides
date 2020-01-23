import styled from "styled-components"

export const FeaturePosts = styled.div`
  width: 460px;
  max-width: 100%;
  background-color: #fff;
  border-radius: 6px;
  padding: 45px;
  @media (max-width: 990px) {
    width: 400px;
  }

  @media (max-width: 767px) {
    padding: 25px;
  }

  .featured_post {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const Title = styled.div`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.17em;
  position: relative;
  margin-bottom: 30px;

  &:after {
    content: "";
    width: 80px;
    height: 1px;
    background: #292929;
    display: block;
    margin-top: 8px;
  }
`
