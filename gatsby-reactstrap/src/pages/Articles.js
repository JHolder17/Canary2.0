import React from 'react'
import { Row, Col, } from 'reactstrap';
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'

const Articles = ({ data }) => (
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
      <Col md={{ size: 8, offset: 2 }}>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>
              Posted by {post.node.frontmatter.author} on{' '}
              {post.node.frontmatter.date}
            </small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <hr />
          </div>
        ))}
      </Col>
    </Row>
    <Row style={{ backgroundColor: 'black', marginTop: '80px' }}>
      <Col>
        <p class="align-middle" style={{ color: '#FBF248', textAlign: 'center', paddingTop: '2rem', paddingBottom: '1rem', }}>For a demo, call <strong>(267) 354-0823</strong> or email <strong>simplify@cancomply.io.</strong></p>
      </Col>
    </Row>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC}
    ){
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default Articles