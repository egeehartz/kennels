import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import {Animal} from "./Animal"
import "./Animal.css"

export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
        getLocations()
        getAnimals()
    }, [])

    return (
        <div className="animals">
        {
            animals.map(mappedAnimal => {
                const owner = customers.find(c => c.id === mappedAnimal.customerId)
                const clinic = locations.find(l => l.id === mappedAnimal.locationId)

                return <Animal key={mappedAnimal.id} 
                animal={mappedAnimal}
                location={clinic}
                customer={owner} />
            })
        }
        </div>
    )
}

//key and animal are props, the things in curly braces are values