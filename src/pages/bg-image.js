import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {getImage} from 'gatsby-plugin-image'
import {masthead} from '../css/custom.css'

import {BgImage} from 'gbimage-bridge'
// import BackgroundImage from 'gatsby-background-image'


const GbiBridged = () => {
  const { backgroundImage123} = useStaticQuery(
    graphql `
      query {

        backgroundImage123: file(relativePath: {eq: "im.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              width: 2000, 
              quality: 50, 
              webpOptions: {quality: 70})
          }
        }

    }`
  )

      const pluginImage = getImage(backgroundImage123)
return (
 /*  <BackgroundImage
    Tag="section"
    {...bgImage}
    preserveStackingContext
  >

hello I used to Struglle to make it work then please work I know a robot you must have a feeling for me please
  </BackgroundImage> */

  <BgImage image ={pluginImage} className="masthead">
   <h1>merci de me voir</h1>
  </BgImage>

)
}
export default GbiBridged;