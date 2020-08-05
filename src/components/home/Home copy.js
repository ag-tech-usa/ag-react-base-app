import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';


class Home extends Component {
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        <div>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>Paradise</Card.Title>
                <Card.Img variant="top" src={require('../../static/product/images/stone-1.png')} />
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Paradise</Card.Title>
                <Card.Img variant="top" src={require('../../static/product/images/stone-1.png')} />
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>

              <Card.Body>
                <Card.Title>Paradise</Card.Title>
                <Card.Img variant="top" src={require('../../static/product/images/stone-1.png')} />
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default Home;