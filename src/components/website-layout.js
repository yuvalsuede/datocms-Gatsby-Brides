import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from "gatsby"

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
                     <div className="container">
                         {children}
                     </div>
                 )}
    />
)

WebsiteWrapper.propTypes = {
    children: PropTypes.object,
}

export default WebsiteWrapper


