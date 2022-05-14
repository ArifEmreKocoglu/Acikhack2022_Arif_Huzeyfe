import React, { Component } from 'react'
import '../Styles/MainContainer.css'
import Cargo from './Cargo'
import Customer from './Customer'
import Seller from './Seller'


export default class MainContainer extends Component {
    render() {
        return (
            
            <div>
               <Seller/>
               <Cargo/>
               <Customer/>
            </div>
        )
    }
}

export { MainContainer }
