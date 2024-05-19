import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'

import MarvelScreen from '../components/marvel/MarvelScreen'
import HeroesScreen from '../components/heroes/HeroesScreen'
import DcScreen from '../components/dc/DcScreen'

const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Routes>|
                    <Route exact path='/marvel' element={MarvelScreen} />|
                    <Route exact path='/heroe/:heroId' element={HeroesScreen} />|
                    <Route exact path='/dc' element={DcScreen} />|

                    <Route path='*' element={<Navigate to='/marvel' />} />
                </Routes>
            </div>
        </>
    )
}

export default DashBoardRoutes
