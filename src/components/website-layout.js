import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from "gatsby"
import Header from "./header";
import PageContainer from "./container";
import Footer from "./footer";
import {HelmetDatoCms} from 'gatsby-source-datocms'
import '../styles/index.sass'

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
                         <Header
                             siteTitle={data.datoCmsSite.globalSeo.siteName}
                             categories={data.allDatoCmsCategory.nodes}
                         />
                         <PageContainer>
                             {children}
                         </PageContainer>
                         <Footer/>
                     </>
                 )}
    />
)

WebsiteWrapper.propTypes = {
    children: PropTypes.object,
}

export default WebsiteWrapper


