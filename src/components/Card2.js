import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class Card2 extends Component {
    constructor(props){
        super(props)
this.state={
    dataapi:[]
}

    }


functionadelet=()=>{
  this.props.delet(this.props.datacar2._id)

}


    render() {
        return (
            <div>
 


 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.datacar2.url} />
  <Card.Body>
    <Card.Title>{this.props.datacar2.titil}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" onClick={this.functionadelet}>delet</Button>
  </Card.Body>
</Card>



            </div>
        )
    }
}

export default Card2;
