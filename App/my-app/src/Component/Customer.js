// import React, { Component } from 'react'
import '../Styles/Customer.css'

function Customer({images, imagesCargo}){
        return (
            <section className="section sectionCustomer" id="customer">
                <div className="imageCargo">
                    <img src={imagesCargo[imagesCargo.length - 1]} alt="soneklenen"/>
                    <h2>Satıcıdan Gelen</h2>
                    <button id="btn" type="button">Doğruluğunu Onaylıyorum</button>
                </div>
                <div className="imageSeller">
                    <img src={images[images.length - 1]} alt="sonekleneresim"/>
                    <h2>Satıcıdan Gelen</h2>
                    <button id="btn" type="button">Doğruluğunu Onaylıyorum</button>
                </div>
            </section>
        )
}

export default Customer
