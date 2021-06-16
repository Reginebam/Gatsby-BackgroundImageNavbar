import React from "react"
import GbiBridged from './bg-image'
import Layout from '../components/Layout'
import {Col, Row, Image, Container, Carousel, CarouselItem } from 'react-bootstrap'

export default function Home() {
  return <Layout>
    <GbiBridged/>
  
        <br/>

    <br/>
    <br/>
    <br/>


<div>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
      alt="First slide"
    />
    <Carousel.Caption>
      
      <p> Photography.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.businessinsider.in/photo/81769906/How-to-reverse-image-search-on-Google-to-find-information-related-to-a-specific-photo.jpg?imgsize=297676"
      alt="Second slide"
    />

    <Carousel.Caption>
     
      <p>Design</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.anthedesign.fr/w2015/wp-content/uploads/2016/12/couleur-du-web-2017.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
      <p>Draw</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

    <Container>
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
