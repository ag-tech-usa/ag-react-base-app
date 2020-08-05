import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Carousel>
            <Carousel.Item>
              <Card>
                <Card.Body>
                  <Card.Title>Stone-1</Card.Title>
                  <Card.Img variant="top" src={require('../../static/product/images/stone-1.png')} />
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Carousel.Caption>
                <h1>First slide label</h1>
                <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Body>
                  <Card.Title>Stone-2</Card.Title>
                  <Card.Img variant="top" src={require('../../static/product/images/stone-1.png')} />
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Body>
                  <Card.Title>Stone-3</Card.Title>
                  <Card.Img variant="top" src={require('../../static/product/images/stone-1.png')} />
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <h2>HELLO</h2>
        <p>Text Here .</p>
        <p>Text Here</p>
      </div>

    );
  }
}

export default Home;