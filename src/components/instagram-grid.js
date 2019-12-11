import React from "react"
import {Grid, SimpleCard} from "@horacioh/gatsby-theme-instagram"
import InstagramGrid from "@horacioh/gatsby-theme-instagram/src/components/Grid";
import dimensions from "../constants/dimensions";

export default () => (
    <div css={{
        maxWidth: `${dimensions.maxwidthDesktop}px`,
        margin: '50px auto',
        a : {
            background: 'none !important'
        }
    }}>
        <InstagramGrid card={SimpleCard} css={{

        }}/>
    </div>
)
