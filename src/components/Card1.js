import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class Card1 extends Component {
    constructor(props){
        super(props)
this.state={
    dataapi:[]
}

    }


functionadd=()=>{
  this.props.haneladd(this.props.cars1data._id)

}


    render() {
        return (
            <div>
 


 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.cars1data.url} />
  <Card.Body>
    <Card.Title>{this.props.cars1data.titil}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" onClick={this.functionadd}>add to fovret</Button>
  </Card.Body>
</Card>



            </div>
        )
    }
}

export default Card1;
