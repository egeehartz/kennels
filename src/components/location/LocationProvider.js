import React, { useState, useEffect } from "react"


 //The context is imported and used by individual components that need data
export const LocationContext = React.createContext()


//This component establishes what data can be used.
//Instead of many functions, one big function is used
export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    //pretty familiar
    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then(setLocations)
    }

    //C of CRUD
    const addLocation = location => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
            .then(getLocations)
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */

    //THE return statement of the function
    return (
        <LocationContext.Provider value={{
            locations, addLocation, getLocations
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}