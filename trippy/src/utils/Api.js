import React, { cloneElement, Component } from 'react'

const config = {

    host: "http://localhost:3002",
};

export default class Api extends Component {

    getHomeData =()=> {
        const url = `${config.host} /api/home`;
  return fetch(url)
  .then (res => res.json())
    .then (res =>{

    })
} 


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
