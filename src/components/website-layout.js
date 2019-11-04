import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from "gatsby"
import Header from "./header";

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
   
    }
  `}
                 render={data => (
                     <>
                         <Header siteTitle={data.datoCmsSite.globalSeo.siteName}/>
                         <div className="container">
                             {children}
                         </div>
                     </>
                 )}
    />
)

WebsiteWrapper.propTypes = {
    children: PropTypes.object,
}

export default WebsiteWrapper


