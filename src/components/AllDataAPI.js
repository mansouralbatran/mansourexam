import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Card1 from './Card1'


class AllDataAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataapi: [],
            saveddata:[]
        }

    }

    componentDidMount = async () => {
        // const { user } = this.props.auth0;

       'mansouralbatran@gmail.com'

      ///localhost:3002/data?email=
        let data3 = await axios.get(`${process.env.REACT_APP_SERVER}/data?email$?email=mansouralbatran@gmail.com`)
        console.log('gggggggg',data3);
        this.setState({
            dataapi: data3.data
        })

    }
//localhost:3002/add?email=mansouralbatran@gmail.com,body
    haneladd=async (choclet_id)=>{
        const { user } = this.props.auth0;

        let email2=user.email
        console.log('uuuuuu',email2);
        let cosen=this.state.dataapi.find(elem=>{
            return elem._id===choclet_id
        })
        let data4= await axios.post(`${process.env.REACT_APP_SERVER}/add?email=${email2}`,cosen)

        this.setState({
            saveddata: data4.data
        })

    
    }

    
    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>

                {
                
                this.state.dataapi.map(elem => {

                    return <Card1 cars1data={elem} haneladd={this.haneladd} />
                })}








            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
