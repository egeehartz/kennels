import React, { useState } from "react"


 //The context is imported and used by individual components that need data
export const AnimalContext = React.createContext()


//This component establishes what data can be used.
//Instead of many functions, one big function is used
export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])
    const [ searchTerms, setTerms ] = useState("")

    //pretty familiar
    const getAnimals = () => {
        return fetch("http://localhost:8088/animals")
            .then(res => res.json())
            .then(setAnimals)
    }

    //C of CRUD
    const addAnimal = Animal => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Animal)
        })
            .then(getAnimals)
    }

    const getAnimalById = (id) => {
        return fetch(`http://localhost:8088/animals/${ id }?_expand=location&_expand=customer`)
            .then(res => res.json())
    }

    /*
        You return a context provider which has the
        `Animals` state, the `addAnimal` function,
        and the `getAnimal` function as keys. This
        allows any child elements to access them.
    */

    //THE return statement of the function
    return (
        <AnimalContext.Provider value={{
            animals, addAnimal, getAnimals, getAnimalById
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}