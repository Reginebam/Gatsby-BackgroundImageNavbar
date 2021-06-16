import React from 'react'
import Layout from '../../components/Layout'
import {Image} from 'react-bootstrap'
import { Player } from 'video-react'
import {trailer_hd} from '../../css/trailer_hd.png'


export default function explore() {
  return (
    <Layout>
      
      <Player
      playsInline
      poster={trailer_hd}
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      alt="loading"
      width="100px"
    />
    </Layout>
  )
}
