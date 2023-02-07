

import React from 'react'
import { Routes , Route} from 'react-router-dom'
import * as LayoutPages from "../../apps/Layout"
import Loader from '../../components/loader/Loader'
import { Hooks } from '../../hooks'
import { Path } from '../../services/Path'

export default function LayoutRoutes() {

  const { currentUser , token } = Hooks.useUser()

  if(token) {
    if(!currentUser){
      return <Loader/>
    }
  };
  return (
    <React.Fragment>
      <Routes>
        <Route index element={<LayoutPages.Main/>} />
        <Route path={Path.favorite} element={<LayoutPages.Favorite/>} />
        <Route path={Path.cart} element={<LayoutPages.Cart/>} />
      </Routes>
    </React.Fragment>
  )
}
