import React from 'react'
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'
import PlayerInput from './components/PlayerInput'
import TeamInput from './components/TeamInput'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/playerInput' component={PlayerInput} />
        <Route path='/teamInput' component={TeamInput} />
      </Switch>
    </div>
  )
}

export default App
