import React from "react"
import "./Animal.css"

export default ({animal}) => (
     <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="animal__customer">Owner: {animal.customerId}</div>
        <div className="animal__location">Kennel: {animal.locationId}</div>
    </section> 
    )
