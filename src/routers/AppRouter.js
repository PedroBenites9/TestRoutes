import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import { Navbar } from '../components/ui/Navbar'
import LoginScreen from '../components/login/LoginScreen'
import DashboardRoutes from './DashboardRoutes';
const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route exact path='/login' Component={LoginScreen} />
                    <Route path='/' Component={DashboardRoutes} />
                </Routes>
            </div>
        </Router>
    )
}

export default AppRouter
