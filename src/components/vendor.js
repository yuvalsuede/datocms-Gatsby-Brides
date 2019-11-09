import React from "react"
import styled from "@emotion/styled" // to take image data and render it
import {css} from "@emotion/core" // to take image data and render it
import Button from '@material-ui/core/Button';
import colors from "../constants/colors"
import Chip from '@material-ui/core/Chip';
import {mq} from "../constants/dimensions";
import Img from "gatsby-image";


const Hashtags = (props) => {
    const tags = props.tags;
    console.log(tags);

    return (
        <div>
            {
                tags.map((tag, index) => {
                    return (
                        <Chip
                            key={`Key_${index}`}
                            label={`#${tag}`}
                            clickable
                            color="primary"
                            css={{
                                margin: '10px;',
                                background: '#dd4fb1',
                                padding: '10px'
                            }}
                        />
                    )
                })
            }
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
        color: 'black'
    }}>
        {props.description}
    </p>)
}
const Vendor = (props) => (

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
            textAlign: 'center'
        },
    }}>
        <VendorRight>
            <div
                css={{
                    color: `#${colors.dark}`,
                    fontSize: '16px',
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
                            flexGrow: '1'
                        }}
                        tags={['הרבה המלצות', 'הרבה עוקבים']}
                    />
                </div>
            </div>

        </VendorRight>
        <VendorLeft>
            <Button
                onClick={() => navigateTo(props.vendor.mainLink)}
                variant="contained"
                color="primary"
                css={{
                    background: `#${colors[500]}`,
                    height: '45px',
                    margin: '0 auto',
                    alignSelf: 'center',
                    padding: '0 30px',
                }}>
                לאתר
            </Button>
        </VendorLeft>
    </div>
)

//
// const useStyles = makeStyles({
//     root: {
//
//         width: "100%",
//         padding: "10px 30px",
//         direction: "rtl",
//         height: "50px",
//         display: "flex",
//         alignItems: "center",
//         borderRadius: "0",
//         fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
//
//     },
//     rootSpan: {
//         padding: "0 10px"
//     },
//     vendorCards: {
//         direction: "rtl",
//         marginBottom: '10px',
//         borderRadius: '0'
//     }
// });

export default Vendor
