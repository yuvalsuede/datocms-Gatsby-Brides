import React from "react"
import styled from "@emotion/styled" // to take image data and render it
import Card from "@material-ui/core/Card"
import Button from '@material-ui/core/Button';
import colors from "../constants/colors"
import Chip from '@material-ui/core/Chip';

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
                height: '80px',
                width: '80px',
                margin: '10px 0'
            }}
        >

            <img
                css={{
                    height: '100%',
                    width: 'auto',
                    objectFit: 'cover'
                }}
                src={props.path}
                alt="avatar"
            />
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
        height: '140px',
        margin: '10px 0',
        padding: '0 30px',
        display: 'flex'
    }}>
        <VendorRight>
            <div
                css={{
                    color: '#1a86ba',
                    fontSize: '16px',
                    margin: '10px 0',
                    fontWeight: '700'
                }}
            >{props.vendor.name}
            </div>

            <div css={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Avatar
                    css={{
                        width: '80px',
                        height: 'auto',
                    }}
                    path={props.vendor.thumbnailImage.url}
                />
                <div css={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '50px',
                    flexGrow: '1'
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
