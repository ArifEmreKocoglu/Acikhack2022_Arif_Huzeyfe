// import React, { Component } from 'react'
import '../Styles/Customer.css'

function Customer({images, imagesCargo}){
        return (
            <section className="section sectionCustomer" id="customer">
                <h1 className="sectionTitle">Customer</h1>
                <div className="imageCargo">
                    <img src={imagesCargo[imagesCargo.length - 1]} alt=""/>
                    <h2>Kargocudan Gelen</h2>
                    <button id="btn" type="button">Doğruluğunu Onaylıyorum</button>
                </div>
                <div className="imageSeller">
                    <img src={images[images.length - 1]} alt=""/>
                    <h2>Satıcıdan Gelen</h2>
                    <button id="btn" type="button">Doğruluğunu Onaylıyorum</button>
                </div>
            </section>
        )
}

export default Customer
