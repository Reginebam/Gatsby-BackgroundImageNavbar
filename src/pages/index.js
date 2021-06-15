import React from "react"
import GbiBridged from './bg-image'
import Layout from '../components/Layout'
import {Col, Row, Image, Container, Carousel, CarouselItem } from 'react-bootstrap'

export default function Home() {
  return <Layout>
    <GbiBridged/>
    <Container>
        <br/>
  <Row>
    <br/>
    <br/>
    <br/>



    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </Row>
    <br/>
   
  <br/>

  <Row>

  <Col xs={6}>
    <Image src="https://image.freepik.com/photos-gratuite/fille-appareil-photo-professionnel-faisant-images-arbre-fleurs_87910-1138.jpg" fluid/>
  </Col>

  <Col xs={6}>
    <Image src="https://media.gettyimages.com/photos/girl-with-film-camera-taking-photo-in-the-forest-picture-id543351654?s=612x612" fluid/>
  </Col>
  </Row>
</Container>
<br/>



   <Container fluid>
     <Row>
       <Col fluid><Image height="400px"  src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" fluid/>
       </Col>
     </Row>
   </Container>


  </Layout>
}
