import React from 'react';
import { Link, graphql } from 'gatsby';
import { Row, Col, } from 'reactstrap';

import Layout from '../components/layout'

export default function Template({ data }) {
  const post = data.markdownRemark

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
        <Col md={{ size: 8, offset: 2 }} style={{ marginBottom: '20px' }}>
          <Link to="/Articles" class="backbtn"> &lsaquo; Back</Link>
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 8, offset: 2}} style={{ marginBottom: '20px' }}>
          <h3>{post.frontmatter.title}</h3>
        </Col>
      </Row>
      <Row>
      <Col md={{ size: 8, offset: 2}} style={{ marginBottom: '20px' }}>
          <p>
            Posted by {post.frontmatter.author} on {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <Link to="/Articles" class="backbtn">&lsaquo;	Back</Link>
        </Col>
      </Row >
      <Row style={{ backgroundColor: 'black', marginTop: '60px' }}>
        <Col>
          <p class="align-middle" style={{ color: '#FBF248', textAlign: 'center', paddingTop: '2rem', paddingBottom: '1rem', }}>For a demo, call <strong>(267) 354-0823</strong> or email <strong>simplify@cancomply.io.</strong></p>
        </Col>
      </Row>
    </Layout >

  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path } }) {
        html
      frontmatter {
        path
        title
        author
        date
    }
  }
}
`