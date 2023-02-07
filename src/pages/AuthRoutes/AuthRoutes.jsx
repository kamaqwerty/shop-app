
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as AuthPages from "../../apps/Auth"
import useAuth from '../../hooks/useAuth';
import useLocations from '../../hooks/useLocations';
import { Path } from '../../services/Path';

export default function AuthRoutes() {

  const { token } = useAuth();
  const { actions } = useLocations();

  React.useEffect(() => {
    if(token){
      actions.goToMain()
    }
  }, [token])

  return (
    <React.Fragment>
      <Routes>
        <Route path={Path.register} element={<AuthPages.Register/>}/>
        <Route path={Path.login} element={<AuthPages.Login/>}/>
      </Routes>
    </React.Fragment>
  )
}
