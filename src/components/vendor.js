import React from "react"
import styled from "@emotion/styled" // to take image data and render it
import {css} from "@emotion/core" // to take image data and render it
import Button from '@material-ui/core/Button';
import colors from "../constants/colors"
import Chip from '@material-ui/core/Chip';
import {mq} from "../constants/dimensions";
import Img from "gatsby-image";
import {OutboundLink} from "gatsby-plugin-google-analytics";
// import {mq} from "../constants/dimensions"; // to take image data and render it


const Hashtags = (props) => {
    const tags = props.tags;
    console.log(tags);

    return (
        <div css={{
            margin: '10px;',
            color: '#dd4fb1',
            padding: '10px',
            wordWrap: 'break-word',
            opacity: '0.5',
            whiteSpace: 'pre'
        }}>
            <pre>{
                tags.reduce((acc , tag ) => {
                    return (

                            acc +  `   #${tag}`

                    )
                }, '')
            }
            </pre>
        </div>
    )
}

const Avatar = (props) => {
    console.log(props);
    return (
        <div
            css={{
                height: '100px',
                width: '100px !important',
                margin: '10px 0'
            }}
        >

            <Img
                fluid={props.fluid}
                alt="Brides.il"
                css={{
                    height: '100%',
                    width: 'auto',
                    objectFit: 'cover'
                }}/>
        </div>
    )
}

const VendorLeft = styled.div`

  width: 150px;
  height: 100%;
  display: flex;

`
const VendorRight = styled.div`

  display: flex;
  flex-grow: 2;
  flex-direction: column;

`
const navigateTo = (url) => {

    console.log(url);

    window.open(url);
}

const VendorDescription = (props) => {
    return (<p css={{
        margin: '10px',
        fontSize: '14px',
        color: 'black',
        padding: '0 20px'
    }}>
        {props.description}
    </p>)
}
const Vendor = (props) => (
    <>
    <div css={{
        position: 'absolute',
        border: '1px solid #e6e6e6',
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: '#e6e6e6',
        marginRight: '-38px',
        marginTop: '20px',
        background: 'white',
        [mq[0]]: {
            marginRight: '10px'
        }
    }}>{ props.vendor.index + 1 }</div>
    <div css={{
        width: '100%',
        height: '200px',
        margin: '10px 0',
        padding: '0 30px',
        display: 'flex',
        [mq[0]] : {
            height: 'auto',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: 'auto',
            maxWidth: '90%',
            margin: '0 auto'
        },
    }}>
        <VendorRight>
            <div
                css={{
                    color: `#${colors.dark}`,
                    fontSize: '20px',
                    fontWeight: '100',
                    margin: '10px 0',
                }}
            >{props.vendor.name}
            </div>

            <div css={{
                display: 'flex',
                flexDirection: 'row',
                maxWidth: '500px',
                [mq[0]] : {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                },

            }}>
                <Avatar
                    css={{
                        width: '80px',
                        height: 'auto',
                    }}
                    // path={props.vendor.thumbnailImage.url}
                    fluid={props.vendor.thumbnailImage.fluid}
                />
                <div css={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '50px',
                    flexGrow: '1',
                    [mq[0]]: {
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        margin: '10px 0 20px'
                    }
                }}>
                    <VendorDescription description={props.vendor.description}/>
                    <Hashtags
                        css={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexGrow: '1',
                            maxWidth: '90%'
                        }}
                        tags={props.vendor.hashtags }
                    />
                </div>
            </div>

        </VendorRight>
        <VendorLeft>
            <OutboundLink
                target="_blank"
                href={props.vendor.mainLink}
                css={{
                    textDecoration: 'none',
                    margin: '0 auto',
                    alignSelf: 'center',
                }}
            >
                <Button
                    // onClick={() => navigateTo(props.vendor.mainLink)}
                    variant="contained"
                    color="primary"
                    css={{
                        background: `#dd4fb1`,
                        height: '45px',
                        padding: '10px 30px',
                        fontSize: '16px'

                    }}>
                    לאתר <span></span>
                </Button>
            </OutboundLink>
        </VendorLeft>
    </div>
    </>
)


export default Vendor
