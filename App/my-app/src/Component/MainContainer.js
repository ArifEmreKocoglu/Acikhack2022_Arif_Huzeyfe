// import React, { Component } from 'react'
import React from 'react'
import '../Styles/MainContainer.css'
import Cargo from './Cargo'
import Customer from './Customer'
import Seller from './Seller'
import { useState } from "react";
// import { create } from "ipfs-http-client";


function MainContainer (){
    
    const [imagesCargo, updateImagesCargo] = useState([]);
    const [images, updateImages] = useState([]);    
        return (
            <section>
               <Seller updateImages= {updateImages} images = {images}/>
               <Cargo imagesCargo={imagesCargo} updateImagesCargo ={updateImagesCargo} />
               <Customer images = {images} imagesCargo={imagesCargo}/>
            </section>
        )
}
export default MainContainer