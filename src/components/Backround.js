import React, { Component } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"

export default class Backround extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            postst: [],
            photos: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res);
            this.setState({
                postst: res.data
            })
        })

        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res) =>{
            console.log(res);
            this.setState({
                photos: res.data
            })
        })

        .catch(() => {
            alert('error');
        })
    }
  render() {
    return (
      <>
      
      <div className='countener'>

        <div className='row'>
            {this.state.postst.map((item,index) =>{
                return(
                    <div className='col-4 mt-3' key={index}>
                        <div className='card'>
                            <div className='card-header'>
                                {item.title.slice(0,30)}
                            </div>

                            <div className='card-body'>
                              <img className='w-100' src={this.state.photos[index]?.url} alt='error'/>
                            </div>

                            <div className='card-footer'>
                                {item.body.slice(0,50)}
                            </div>

                        </div>
                    </div>
                )
            } )}
        </div>
      </div>
      
      </>
    )
  }
}
