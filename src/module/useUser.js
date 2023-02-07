


import React from 'react'
import { requestPath } from '../api/request'
import { instance } from '../configs/config'
import { Hooks } from '../hooks';
import {  toast } from "react-toastify"


const getUser = () => instance.get(requestPath.user);

export default function useUser() {

  const { actions } = Hooks.useLocations()
  const [currentUser, setCurrentUser] = React.useState(null)
  const notifyExit = () => toast("You are exit!")


  React.useEffect(() => {
    const request = getUser();

    request 
      .then(res => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
        if(err.response?.status === 401) {
          setCurrentUser(undefined)
        }
      })
  }, [])

  const logOut = React.useCallback(() => {
    localStorage.clear();
    actions.goToLogin();
    setCurrentUser(undefined);
    notifyExit();
  }, [actions]);

  return {
    currentUser,
    logOut
  }
}
