import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'

import Dashboard from './Components/Dashboard/Dashboard'
import Game from './Components/Game/Game'
import Profile from './Components/Profile/Profile'
import Statistics from './Components/Statistics/Statistics'
import Register from './Components/Register/Register'

export default (
  <Switch>
    <Route path='/homepage' component={Dashboard} />
    <Route path='/register' component={Register} />
    <Route path='/game/:category' component={Game} />
    <Route exact path='/profile' component={Profile} />
    <Route path='/profile/statistics' component={Statistics} />
    <Route render={() => <Redirect to="/homepage" />} />
  </Switch>
)