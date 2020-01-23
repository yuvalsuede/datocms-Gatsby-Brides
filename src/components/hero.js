import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import styled from "@emotion/styled" // to take image data and render it
import dimensions, {mq} from "../constants/dimensions"

const HeroWrapper = styled.div`
  height: 100vh;
  max-height: 600px;
  max-width: ${dimensions.maxwidthDesktop}px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 auto;
  position: relative;
  direction: rtl;
  h1 {
    padding: 20px;
    font-size: 40px;
    text-shadow: 1px 1px #616161;
  }
  h2 {
    padding: 10px 20px;
    font-size: 24px;
    text-shadow: 1px 1px #616161;
    max-width: 600px;
  }
`

const ImgStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',

}
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: black;
  opacity: 0.2;
  z-index: 10;
`

const HeroHeader = styled.div`
  position: relative;
  z-index: 11;
  color: white;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 50px 0 0;
`

export const HeroContent = styled.div`
  margin: 0 auto;
  width: 100%;

  @media (min-width: 991px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }

  @media (max-width: 990px) {
    padding-left: 45px;
  }

  @media (max-width: 767px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`

const HeroInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
`


const Hero = ({children, ...props}) => {

    console.log(children);
    console.log(props);
    return (
        <HeroWrapper className="hero-wrapper">
            <Backdrop />
            <Img
                fluid={props.fluid}
                alt="Brides.il"
                style={ ImgStyle }
                // objectFit="scale-down"
                objectPosition="50% 50%"
            />
            <HeroInner>
            <HeroHeader>
                <h1
                css={{
                    [mq[0]]: {
                        textAlign: 'center',
                        justifyContent: 'center',
                        fontSize: '40px !important'
                    }
                }}
                >{props.topDescription}</h1>
                { props.topLongDescription ? (<h2
                    css={{
                        [mq[0]]: {
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontSize: '24px !important',
                            width: '50%',
                            margin: '0 auto'
                        }
                    }}
                >{props.topLongDescription}</h2>)  : ''}
            </HeroHeader>

            <HeroContent>
                {children}
            </HeroContent>
            </HeroInner>
        </HeroWrapper>
    )
}


Hero.propTypes = {
    // coverImg: PropTypes.string.isRequired,
}

export default Hero
