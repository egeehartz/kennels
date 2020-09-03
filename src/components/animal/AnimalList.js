import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animal.css"

export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getAnimals()
    }, [])


    useEffect(() => {
        console.log("AnimalList: Animal state changed")
        console.log(animals)
    }, [animals])

    return (
        <div className="animals">
        {
            animals.map(mappedAnimal => <Animal key={mappedAnimal.id} animal={mappedAnimal} />)
        }
        </div>
    )
}

//key and animal are props, the things in curly braces are values