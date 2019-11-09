import React from "react"
import styled from "@emotion/styled"
import {Card} from "@material-ui/core";
import Vendor from "./vendor";
import colors from "../constants/colors";
import {mq} from "../constants/dimensions"; // to take image data and render it

const ChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
    min-height: 100px;
    margin: -60px auto 0;
    z-index: 10;
    position: relative;
`

const VendorList = (props) => {
    console.log(props);
    return (
        <ChartWrapper
            css={{
                display: "flex",
                alignItems: "center"
            }}>
             <Card
                raised={true}
                css={{
                    maxWidth: "800px",
                    width: "100%",
                    padding: "10px 30px",
                    direction: "ltr",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    borderRadius: "0",
                    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                    background: `#${colors.dark}`,
                    fontSize: `24px`,
                    color: 'white',
                    [mq[0]]: {
                        textAlign: 'center',
                        justifyContent: 'center',
                        fontSize: '14px'
                    }
                }}
            ><span
                 css={{

                 }}
             > Brides.il הנבחרת של</span></Card>

            {props.vendors.edges.map(({node}) => (
                <Card
                    key={node.slug}
                    raised={true}
                    css={{
                        padding: "10px 30px",
                        direction: "rtl",
                        // marginBottom: '10px',
                        borderRadius: '0',
                        maxWidth: "800px",
                        width: "100%",
                        borderBottom: '1px solid #ffddf4',
                        boxShadow: 'none'

                    }}
                >
                    <Vendor vendor={node}/>
                </Card>
            ))}
        </ChartWrapper>
    )
}
export default VendorList
