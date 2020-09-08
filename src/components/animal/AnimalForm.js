import React, { useContext, useRef, useEffect } from "react"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalForm = (props) => {
    const { locations, getLocations } = useContext(LocationContext)
    const {customers, getCustomers} = useContext(CustomerContext)
    const {addAnimal} = useContext(AnimalContext)

    const name = useRef(null)
    const location = useRef(null)
    const customer = useRef(null)


    useEffect(() => {
       getCustomers().then(getLocations)
    }, [])

    const constructNewAnimal = () => {
        const locationId = parseInt(location.current.value)
        const customerId = parseInt(customer.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimal({
                animalName: name.current.value,
                locationId,
                customerId
            })
            .then(() => props.history.push("/animals"))
        }
    }

    return (
        <form className="CustomerForm">
            <h2 className="CustomerForm__title">New Appointment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name: </label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Animal name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="CustomerLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customer">Customer: </label>
                    <select defaultValue="" name="customer" ref={customer} id="customer" className="form-control" >
                        <option value="0">Select a customer</option>
                        {customers.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                Save Appointment
            </button>
        </form>
    )
}