import React, { useState } from "react"


 //The context is imported and used by individual components that need data
export const EmployeeContext = React.createContext()


//This component establishes what data can be used.
//Instead of many functions, one big function is used
export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    //pretty familiar
    const getEmployees = () => {
        return fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then(setEmployees)
    }

    //C of CRUD
    const addEmployee = Employee => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Employee)
        })
            .then(getEmployees)
    }

    //THE return statement of the function
    return (
        <EmployeeContext.Provider value={{
            employees, addEmployee, getEmployees
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}