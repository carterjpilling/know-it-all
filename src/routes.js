import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'

import Dashboard from './Components/Dashboard/Dashboard'
import Game from './Components/Game/Game'
import Landing from './Components/Landing/Landing'
import Profile from './Components/Profile/Profile'
import Statistics from './Components/Statistics/Statistics'

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/homepage' component={Dashboard} />
    <Route path='/game/:category/:type' component={Game} />
    <Route exact path='/profile' component={Profile} />
    <Route path='/profile/statistics' component={Statistics} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
)