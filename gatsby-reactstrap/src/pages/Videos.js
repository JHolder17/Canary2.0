import React from 'react'
import { Row, Col, } from 'reactstrap';

import Layout from '../components/layout'

export default class Videos extends React.Component {
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
                    <Col md={{ size: 8, offset: 2 }}>
                        <h1 style={{ paddingBottom: '20px' }} className="text-center" color="black">Case Studies</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 4 }}>
                        <iframe title="CanaryCommercial" width="100%" height="200px" src="https://www.youtube.com/embed/CppkgVrD6vc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Learn how Canary can <br></br> <strong>#ShrinkYourHaystack</strong></p>
                    </Col>
                    <Col md={{ size: 4 }}>
                        <iframe title="#1" width="100%" height="200" src="https://www.youtube.com/embed/VLEmCPgx7CQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Canary Case Study #1<br></br> <strong>The Case of the Leaky Lid</strong></p>
                    </Col>
                    <Col md={{ size: 4 }}>
                        <iframe title="#2" width="100%" height="200" src="https://www.youtube.com/embed/9E4_KGOzBK4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Canary Case Study #2<br></br> <strong>The Case of the Scary Settings</strong></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 4 }}>
                        <iframe title='#3' width="100%" height="200" src="https://www.youtube.com/embed/Y-xbqxDW3zk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Canary Case Study #3 <br></br> <strong>The Case of the Happy Hauler-Day</strong></p>
                    </Col>
                    <Col md={{ size: 4 }}>
                        <iframe title='#4' width="100%" height="200" src="https://www.youtube.com/embed/CUdsHl8mFuc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Canary News Alert<br></br> <strong>A Brief Case</strong></p>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: 'black', marginTop: '80px' }}>
                    <Col>
                        <p class="align-middle" style={{ color: '#FBF248', textAlign: 'center', paddingTop: '2rem', paddingBottom: '1rem', }}>For a demo, call <strong>(267) 354-0823</strong> or email <strong>simplify@cancomply.io.</strong></p>
                    </Col>
                </Row>
            </Layout >
        )
    }
};
