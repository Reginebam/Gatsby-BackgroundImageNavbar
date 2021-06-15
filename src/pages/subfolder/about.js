import React from 'react'
import Layout from '../../components/Layout'
import {Container, Row, Col, Image} from 'react-bootstrap'
import aboutim from './imageabout/aboutim.jpg'
import aboutim2 from './imageabout/aboutim2.jpg'
import aboutim3 from './imageabout/aboutim3.jpg'


export default function about() {
  return (
    <div>
      
    <Layout >
      <br/>
      <br/>
    <br/>
    <br/>
      <br/>
    <br/>
    <br/>

      <Container>
      <Row>
    <Col xs >
    <Image className="d-block w-100" src={aboutim} alt="aboutme"/> </Col>
    <Col xs>
      <p>
    I am a confident, self-motivated person who communicates well, works hard and have good interpersonal skills. Accountability, Integrity and Commitment are my priority when executing my duty.
I have the requisite qualification, experience and good communication skills.
While pursuing a Diploma of works in engineering, option in network technology and computer systems. I have developed skills in software development, Hardware and Software trouble shooting, along with networking and information security. This knowledge has enabled me to operate in organizations that automate time consuming activities via software Development and also in areas where my knowledge and skills are required.
I have an outstanding problem-solving skill. I am a gragatsnduate in software Development at Maxim Nyansa where I was part of a development team as a front-end developer for a project being developed, after that I decided to improve my skill in network Administration with Maxim Nyansa IT Solution as a trainee embarking on Network Security this step allow me to participate with my colleagues in the deployment of CCTV and local network for the Maxim Nyansa It Solutions .
Among my strengths, I am disciplined, a team player and hardworking with a demonstrated ability to balance the competing demands in the digital market. I am passionate in using technology to solve pupils challenging tasks. I also like graphic designing and photography
</p></Col>
  </Row>
  <br/>
  <Row>
  <Col sm={6} >
  <p>
    I am a confident, self-motivated person who communicates well, works hard and have good interpersonal skills. Accountability, Integrity and Commitment are my priority when executing my duty.
I have the requisite qualification, experience and good communication skills.
While pursuing a Diploma of works in engineering, option in network technology and computer systems. I have developed skills in software development, Hardware and Software trouble shooting, along with networking and information security. This knowledge has enabled me to operate in organizations that automate time consuming activities via software Development and also in areas where my knowledge and skills are required.
I have an outstanding problem-solving skill. I am a gragatsnduate in software Development at Maxim Nyansa where I was part of a development team as a front-end developer for a project being developed, after that I decided to improve my skill in network Administration with Maxim Nyansa IT Solution as a trainee embarking on Network Security this step allow me to participate with my colleagues in the deployment of CCTV and local network for the Maxim Nyansa It Solutions .
Among my strengths, I am disciplined, a team player and hardworking with a demonstrated ability to balance the competing demands in the digital market. I am passionate in using technology to solve pupils challenging tasks. I also like graphic designing and photography
</p>

  </Col>
  <Col sm={6} >
    <Image className="d-block w-100" src={aboutim2} alt="aboutm2e" /> </Col>
  </Row>
    </Container>

    <br/>



<Container fluid>
  <Row>
    <Col fluid><Image height="1040px"  src={aboutim3} alt="aboutm2de"  />
    </Col>
  </Row>
</Container>
    </Layout>
  
    </div>
  )
}
