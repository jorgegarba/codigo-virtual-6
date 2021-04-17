import React from 'react'
import { Switch, Route } from "react-router-dom";
import PosTerminalScreen from './pages/terminal/PosTerminalScreen';
const PosRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/pos/terminal">
          <PosTerminalScreen />
        </Route>
      </Switch>
    </>
  )
}

export default PosRouter
