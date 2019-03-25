import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import './App.scss'

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
})

// Pages
const Login = Loadable({
  loader: () => import('./views/Pages/Login'),
  loading
})

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" name="Login Page" component={Login} />
        {/* <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} /> */}
        <Route path="/" name="Home" component={DefaultLayout} />
      </Switch>
    </Router>
  )
}

export default App
