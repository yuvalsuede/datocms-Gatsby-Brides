import React from "react"
import styled from "@emotion/styled"
import {Card} from "@material-ui/core";
import {mq} from "../constants/dimensions"; // to take image data and render it

const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
    min-height: 100px;
    z-index: 10;
    position: relative;
    margin: 20px auto;
`

const ArticleContent = styled.div`
    padding: 10px 30px;
    direction: rtl;
    max-width: 800px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
`

const Article = (props) => {

    console.log(props);
    return (!props.article || !props.article[0]) ? '' : (
        <ArticleWrapper
            css={{
                h2 : {
                    fontWeight: '200',
                    fontSize: '26px',
                },

                [mq[0]]: {

                }
            }}>
            <ArticleContent css={{
                h3 : {
                    fontSize: '18px',
                    margin: '10px 0',
                    fontWeight: 'bold'
                },
                p : {
                    margin: '20px 0'
                }
            }}>
                <h2>{ props.article[0].mainTitle }</h2>
                <div
                    dangerouslySetInnerHTML={{
                        __html: props.article[1].mainParagraph,
                    }}
                />
            </ArticleContent>
        </ArticleWrapper>
    )
}
export default Article
