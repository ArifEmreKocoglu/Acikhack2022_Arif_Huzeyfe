import React, { Component } from 'react'
import '../Styles/MainContainer.css'
import Cargo from './Cargo'
import Customer from './Customer'
import Seller from './Seller'
import { useState } from "react";
import { create } from "ipfs-http-client";


function MainContainer (){
        return (
            
            <div>
               <Seller/>
               <Cargo/>
               <Customer/>
            </div>
        )
}

export default MainContainer
