import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled" // to take image data and render it
import dimensions, {mq} from "../constants/dimensions"

const HeroWrapper = styled.div`
  height: 300px;
  max-width: ${dimensions.maxwidthDesktop}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
    position: 'absolute'
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
  height: 100%;
  z-index: 11;
  color: white;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 50px 0 0;
`



const Hero = (props) => {

    console.log(props);
    return (
        <HeroWrapper>
            <Backdrop />
            <Img
                fluid={props.fluid}
                alt="Brides.il"
                style={ ImgStyle } />
            <HeroHeader>
                <h1
                css={{
                    [mq[0]]: {
                        textAlign: 'center',
                        justifyContent: 'center',
                        fontSize: '20px !important'
                    }
                }}
                >{props.topDescription}</h1>
                <h2
                    css={{
                        [mq[0]]: {
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontSize: '14px !important',
                            width: '50%',
                            margin: '0 auto'
                        }
                    }}
                >{props.topLongDescription}</h2>
            </HeroHeader>

        </HeroWrapper>
    )
}


Hero.propTypes = {
    // coverImg: PropTypes.string.isRequired,
}

export default Hero
