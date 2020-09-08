import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import {CustomerProvider} from "./customer/CustomerProvider"
import {EmployeeProvider} from "./employee/EmployeeProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import {CustomerList} from "./customer/CustomerList"
import {EmployeeList} from "./employee/EmployeeList"
import {EmployeeForm} from "./employee/EmployeeForm"


export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
            <CustomerProvider>
                <AnimalProvider>
                    <Route exact path="/customers" render={
                        props => <CustomerList {...props} />
                    } />
                    <Route exact path="/customers/create" render={
                        props => <CustomerForm {...props}/>    
                    } />
                </AnimalProvider>
            </CustomerProvider>
            <EmployeeProvider>
                <LocationProvider>
                    <AnimalProvider>
                <Route exact path="/employees" render={
                    props => <EmployeeList {...props} />
                } />
                <Route exact path="/employees/create" render={
                    props => <EmployeeForm {...props}/>    
                } />
                    </AnimalProvider>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}