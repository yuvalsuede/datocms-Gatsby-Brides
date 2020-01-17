import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from "gatsby"
import Header from "./header";
import PageContainer from "./container";
import Footer from "./footer";
import '../styles/index.sass'
import IG from './instagram-grid';
import ResetCss from "../styles/resetCSS";

const WebsiteWrapper = ({children}) => (
    <StaticQuery query={graphql`
    query WebsiteWrapperQuery
    {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      allDatoCmsCategory {
        nodes {
          name
          slug
          heName
        }
      }
   
    }

    
  `}
                 render={data => (
                     <>
                         <ResetCss />
                         <Header
                             siteTitle={data.datoCmsSite.globalSeo.siteName}
                             categories={data.allDatoCmsCategory.nodes}
                         />
                         <PageContainer>
                             {children}
                         </PageContainer>
                         {/*<IG />*/}
                         <Footer/>
                     </>
                 )}
    />
)

WebsiteWrapper.propTypes = {
    children: PropTypes.object,
}

export default WebsiteWrapper


