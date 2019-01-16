import React from 'react'
import { Row, Col, } from 'reactstrap';

import Layout from '../components/layout'

export default class ProductInfo extends React.Component {
  render() {
    return (
      <Layout>
        <Row>
          <Col>
            <div className="gradBar"></div>
          </Col>
        </Row>
        <Row>
          <Col class="text-right" md={{ size: 2, offset: 10 }} style={{ paddingTop: '20px' }}>
            <a href="https://www.linkedin.com/company/canary-compliance/">
              <img src={require('../images/social/SM_icon_linkedin.svg')} alt="LinkedIn" height={"35"} width={"35"} style={{ paddingLeft: '10px' }} />
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
          <Col md={{ size: 8, offset: 2 }}>
            <h1 style={{ paddingBottom: '20px' }} className="text-center" color="black">Product Info</h1>
            <p className="text-left"> Canary connects your ATG to out secure, wireless network and uses alarm
            data to dramatically reduce maintance and repair costs. </p>
          </Col>
        </Row>
        <Row style={{ paddingTop: '20px' }} >
          <Col md={{ size: '4', offset: 2 }} style={{paddingRight: '0px'}}>
            <img src={require("../images/WhoWeAre/Canary.jpg")} alt={"../images/WhoWeAre/default_profile_photo.png"} height={"269px"} width={"300px"} />
          </Col>
          <Col md={{ size: '4' }} style={{ backgroundColor: '#FBF248', paddingTop: '20px', paddingRight: '0', paddingLeft: '0', marginLeft: '0px'}}>
            <ul>
              <li>Installs in minutes</li>
              <li>99.9% reliable, secure connection</li>
              <li>Fewer dispatches</li>
              <li>No need to upgrade your ATG</li>
            </ul>
          </Col>
        </Row>
        <Row >
          <Col md={{ size: 8, offset: 2 }} >
            <h3 style={{ textAlign: 'center', paddingTop: '60px', paddingBottom: '20px' }}>Features</h3>
            <hr style={{ backgroundColor: '#B9B9B9' }}></hr>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <h4>Inventory alerts</h4>
            <p>Real-time notifications let you know when a tank needs delivery and
              whether there's water in that tank.
              </p>
            <h4>Real-time inventory polling</h4>
            <p>Check tank inventory at the touch of a button with our iOS or Android app
              or on out website.
              </p>
            <h4>ATG setttings audit</h4>
            <p>Ensure that your settings are correct so your alarms accurately reflect your
              system.
              </p>
            <h4>Basic alarm alerts</h4>
            <p>Canary groups related alarms together and asses the validity and urgency of
              the issue. This redices alarm noise so you can focus on what's important
              and avoid unnecessary dispatches.
              </p>
            <h4>Canary SmartAlarm alerts*</h4>
            <p>Canary ises contextual data such as weather, along with site history
              analytics, to quickly get to the root of a problem and provide
              recommendations for corrective action.
            </p>
            <h4>Monthly ATG compliance slips</h4>
            <p>Canary bundles the relevant monthly ATG slips to make sure you have all
              the test results needed to provide compliance.
            </p>
            <h4>Monthly site compliance reports*</h4>
            <p>Canary uses compliance locic to review and sees your sites' compliance
              status and provides a summary report.</p>
            <h4>Unlimited record storage*</h4>
            <p>All your compliance records and ATg slips are saved in the cloud so you'll
              always have access.
            </p>
            <h4>ATG remote polling*</h4>
            <p>Run diagnostic ATG tests and send S-Commands with the push of a button.</p>
            <h4>Data analytics*</h4>
            <p>Canary monitors your site data over time to help you analyze and optimize
              site performance.
            </p>
            <p>*Available with Canary Pro</p>
          </Col>
        </Row>
        <Row >
          <Col md={{ size: 8, offset: 2 }} style={{ textAlign: 'center' }}>
            <h3 style={{ paddingTop: '40px', paddingBottom: '20px' }}>Pricing</h3>
            <p>Purchase a Canary box for <strong>$450</strong> and choose your subscription service plan:</p>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: '4', offset: 2 }} style={{ backgroundColor: '#FBF248', paddingLeft: '0' }}>
            <h3 style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '20px' }}>Canary Basic <br></br> $30/mo</h3>
            <ul>
              <li><strong>Inventory Alerts</strong></li>
              <li><strong>Real-time inventory polling</strong></li>
              <li><strong>One-time ATG settings audit</strong></li>
              <li><strong>Basic Alarm alerts</strong></li>
              <li><strong>Monthly ATG compliance slips</strong></li>
            </ul>
          </Col>
          <Col md={{ size: '4' }} style={{ backgroundColor: '#FBF248', marginLeft: '5px', paddingLeft: '0' }}>
            <h3 style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '20px' }}>Canary Pro <br></br> $65/mo</h3>
            <ul>
              <li>Inventory alerts</li>
              <li>Real-time inventory polling</li>
              <li><strong>Annual ATG settings audit</strong></li>
              <li><strong>Canary SmartAlarm alerts</strong></li>
              <li>Monthly ATG compliance slips</li>
              <li><strong>Monthly site compliance reports</strong></li>
              <li><strong>Unlimited record storage</strong></li>
              <li><strong>Unlimited ATG remote polling</strong></li>
              <li><strong>Standard data analytics</strong></li>
              <li><strong>Share issues with contractor</strong></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 8, offset: 2 }} style={{ backgroundColor: '#FBF248', marginTop: '5px', marginBottom: '60px' }}>
            <h3 style={{ textAlign: 'center', paddingTop: '20px' }}>Inventory Only</h3>
            <p style={{ textAlign: 'center', paddingBottom: '5px' }}>Get inventory alers and realtime inventory polling for just $15/mo</p>
          </Col>
        </Row>
        <Row style={{ backgroundColor: 'black' }}>
          <Col md='12'>
            <p class="align-middle" style={{ color: '#FBF248', textAlign: 'center', paddingTop: '2rem', paddingBottom: '1rem', }}>For a demo, call <strong>(267) 354-0823</strong> or email <strong>simplify@cancomply.io.</strong></p>
          </Col>
        </Row>
      </Layout >
    )
  }
};
