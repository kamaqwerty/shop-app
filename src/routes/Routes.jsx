

import React from 'react'
import Footer from '../components/footer/Footer'
import { Route, Routes as Switch } from 'react-router-dom'
import Header from '../components/header/Header'
import AuthRoutes from '../pages/AuthRoutes/AuthRoutes'
import LayoutRoutes from '../pages/LayoutRoutes/LayoutRoutes'
import { MainPath } from '../services/Path'

export default function Routes() {
  return (
    <div>
      <Header/>

      <Switch>
        <Route path={MainPath.layout + "*"} element={<LayoutRoutes/>}/>
        <Route path={MainPath.auth + "*"} element={<AuthRoutes/>}/>
      </Switch>

      <Footer/>
    </div>
  )
}
