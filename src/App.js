import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Facility from './pages/facility'
import CompanyInfo from './pages/company-info'
import ProductLines from './pages/product-lines'

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/company-info" component={CompanyInfo} />
          <Route path="/product-lines" component={ProductLines} />
          <Route path="/facility" component={Facility} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
