import React from 'react'
import Layout from '../../components/Layout'
import {gift} from '../../css/custom.css'
import {gifte} from '../../css/custom.css'
import {marg} from '../../css/custom.css'
import {Col, Row, Image, Container} from 'react-bootstrap'

export default function business() {
  return (
    <Layout>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
<Container >
  <Row className={marg}>
    <Col>

<img
      className="gift"
      src=" https://lorrainesorlet.com/images/lovinglips.gif?crc=4084443677"
      alt="First slide"
      fluid
    />
        </Col>
        <Col>
        <h1>
        Do you want To Be Glamour
        </h1>
        <p>
          <ol>

              <li>Keep your body clean and tidy. Take regular showers to keep your body clean and smelling fresh. Avoid overly scented soaps, as these may clash with perfume ...</li>
                <li>Keep your face clean and clear. Try your best to be blemish free. That means no acne, no pimples, and no bruises or scars. Sometimes it is unavoidable, but ...<li>
                </li>Apply makeup only as you feel necessary. Start with eyeliner. You should have either a small</li>
            
        </ol> </p>
        </Col>
  </Row>
<Row>
  <Col>
  <h1>
  Do you want To brand Yourself
  </h1>
  <p>Personal Branding – Why Now is the Time to Build Your Personal Brand 🕳💯🤝🧬💡🧾🤳💸
    <ol>
                    <li>  You Gain Name Recognition🧾</li>
                    <li>  Your Ideal People Start To Find You💡</li>
                    <li>  Automatically Builds Relationships For You🤝</li>
                    <li>  You Become Exposed To A Larger Audience🧬👩‍💻</li>
                    <li> Build Trust And Confidence🏋️‍♂️🤺</li>
                    <li>  You Become More Visible Online🙋‍♀️</li>
</ol>
</p>
  </Col>
<Col>
<Image
    src="https://i.pinimg.com/originals/3f/4f/f4/3f4ff439ff698abc3000d6b5be4cafb8.gif"
    alt="gift"
  className="gifte"/>
  </Col>
</Row>

</Container>
    </Layout>
  )
}
