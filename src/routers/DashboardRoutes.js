import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'

import MarvelScreen from '../components/marvel/MarvelScreen'
import HeroesScreen from '../components/heroes/HeroesScreen'
import DcScreen from '../components/dc/DcScreen'

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div>
                <Routes>|
                    <Route exact path='/marvel' Component={MarvelScreen} />|
                    <Route exact path='/heroe/:heroId' Component={HeroesScreen} />|
                    <Route exact path='/dc' Component={DcScreen} />|

                </Routes>
            </div>
        </>
    )
}

export default DashboardRoutes
