import React from 'react'
import { Row, Col } from 'reactstrap';
import { Link } from "gatsby"

import Layout from '../components/layout'
import ModalExample from '../components/modal'
import ReactCarousel from '../components/ReactCarousel'

export default class index extends React.Component {
  render() {
    return (
      <Layout>
        <Row>
          <Col>
            <ReactCarousel></ReactCarousel>
          </Col>
        </Row>
        <Row>
          <Col class="text-right" md={{ size: 2, offset: 10 }} style={{ paddingTop: '20px' }}>
            <a href="https://www.linkedin.com/company/canary-compliance/">
              <img class='linkedin' src={require('../images/social/SM_icon_linkedin.svg')} alt="LinkedIn" height={"35"} width={"35"} style={{ paddingLeft: '10px' }} />
            </a>
            <a href="https://twitter.com/canarycomply?lang=en">
              <img src={require('../images/social/SM_icon_twitter.svg')} alt="Twitter" height={"35"} width={"35"} style={{ paddingLeft: '10px' }} />
            </a>
            <a href="https://www.linkedin.com/company/canary-compliance/about/">
              <img src={require('../images/social/SM_icon_email.svg')} alt="Email" height={"35"} width={"35"} style={{ paddingLeft: '10px' }} />
            </a>
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingBottom: '20px' }}>
            <h1 className="text-center" color="black">Put money in your pocket</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 8, offset: 2 }} style={{ paddingBottom: '40px' }}>
            <p class="text-left">
              Gain total control of your ATG alarms with Canary’s revolutionary, remote UST monitoring
              system. The hardware installs in minutes, securely and wirelessly connecting your ATG to
              our powerful time- and money-saving software tools. Canary's unique, proprietary alarm
              intelligence uses relevant contextual data to help you pinpoint when and where to spend
              your maintenance and repair dollars to achieve cost-effective compliance.
              <Link to="/ProductInfo/" style={{ fontWeight: 'bold', color: '#4A90E2' }}> Find out how.</Link>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ textAlign: 'center' }}>Find out how Canary can <strong>#ShrinkYourHaystack.</strong></p>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <ModalExample
              className={'modal-dialog modal-dialog-centered'}
              pic={require('../images/shrink.png')}
              buttonLabel={'BURRON'}
              link={<iframe title="CanaryCommercial" width="100%" height="500" src="https://www.youtube.com/embed/CppkgVrD6vc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}>
            </ModalExample>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: 'center', paddingTop: '30px', paddingBottom: '60px' }}>
            <Link class="btn btn-primary" to='/CaseStudies/' role="button">MORE VIDEOS</Link>
          </Col>
        </Row>
        <Row style={{ backgroundColor: 'yellow' }}>
          <Col>
            <p class="align-middle" style={{ textAlign: 'center', paddingTop: '2rem', paddingBottom: '1rem', left: '0', right: '0' }}>For a demo, call <strong>(267) 354-0823</strong> or email <strong>simplify@cancomply.io.</strong></p>
          </Col>
        </Row>
        <Row >
          <Col md={{ size: 8, offset: 2 }} >
            <h3 style={{ textAlign: 'center', paddingTop: '60px', paddingBottom: '40px' }}>Industry Insights</h3>
            <hr style={{ backgroundColor: '#B9B9B9' }}></hr>
          </Col>
        </Row>
        <Row class="row justify-content-md-center" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Col md={{ size: 'auto', offset: '2' }}>
            <img src="https://placekitten.com/150/150" alt=""></img>
          </Col>
          <Col md="6">
            <h4 class="text-left">UST Data Analysis for Fleet Management</h4>
            <p>Teaser for document, article or blog goes here, something compelling to get people to
            read it. Maybe a leading quesiton?
            <Link to="/Articles/" style={{ fontWeight: 'bold', color: '#4A90E2' }}> READ</Link>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 8, offset: 2 }} >
            <hr style={{ backgroundColor: '#B9B9B9' }}></hr>
          </Col>
        </Row>
        <Row class="row justify-content-md-center" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
          <Col md={{ size: 'auto', offset: 2 }} >
            <img src="https://placekitten.com/150/150" alt=""></img>
          </Col>
          <Col md="6">
            <h4>UST Data Analysis for Fleet Management</h4>
            <text>Teaser for document, article or blog goes here, something compelling to get people to
            read it. Maybe a leading quesiton? </text>
            <Link to="/Articles/" style={{ fontWeight: 'bold', color: '#4A90E2' }}> READ</Link>
          </Col>
        </Row>
      </Layout>
    )
  }
}

