import React from "react"
import { HashRouter as Router,Route,Switch } from "react-router-dom"
import Layout from '../pages/Main/layout'
import Home from "../pages/Main//Home"
import LifeService from "../pages/Main//LifeService"
import Shop from "../pages/Main/Shop"
import User from "../pages/Main//User"
import City from '../pages/City'
import Search from '../pages/Search'

import BottomNav from "../components/BottomNav"

const AppRouter = () =>{
    return(
        <Router>
             <Switch>
                <Route path="/city" component={ City }></Route>
                <Route path="/search/:keywords" component={Search}></Route>
            <Layout path="/">
                <BottomNav />
                <Switch>
                    <Route exact path="/" component={ Home }></Route>
                    <Route path="/life" component={ LifeService }></Route>
                    <Route path="/shop" component={ Shop }></Route>
                    <Route path="/user" component={ User }></Route>
                </Switch>
            </Layout>
            </Switch>
        </Router>
    )
}

export default AppRouter