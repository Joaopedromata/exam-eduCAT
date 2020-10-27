import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Classes from './pages/Classes'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Classes} /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes