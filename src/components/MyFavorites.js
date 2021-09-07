import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';

import Card2 from './Card2'
import axios from 'axios'

class MyFavorites extends React.Component {



  constructor(props) {
    super(props)
    this.state = {
        dataapi: [],
        saveddata:[]
    }
  }
    componentDidMount = async () => {
      const { user } = this.props.auth0;

      let email4=user.email

     /// localhost:3002/get?email2=
      let data4 =await axios.get(`${process.env.REACT_APP_SERVER}/get?email2=${email4}`)
      console.log('gggggggg',data4);
      this.setState({
        saveddata:data4.data
      })}







//localhost:3002/updat?id=t44g34t544,body

        delet=async (choclet_id)=>{
        const { user } = this.props.auth0;

        let email2=user.email
        console.log('uuuuuu',email2);
        let cosen=this.state.saveddata.find(elem=>{
            return elem._id===choclet_id
        })
        console.log('chose',cosen);
        let data4= await axios.post(`${process.env.REACT_APP_SERVER}/remove?email=${email2}&id=${cosen._id}`)

        this.setState({
            saveddata: data4.data
        })


      }


  render() {

   
    return(
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        {this.state.saveddata.map((ele)=>{
          return(<Card2 datacar2={ele} delet={this.delet}  />)
 
        })}
       
       
      </>
    )
  }
}

export default withAuth0(MyFavorites)