import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Documentation from './pages/Documentation'
import Examples from './pages/Examples'
import Home from './pages/Home'
import Projects from './pages/Projects'
import vars from './vars'
import NotFound from './pages/404'

function App () {
    return (
        <Router basename={vars.path} >
            <Switch>
                <Route path="/projects-using-sbuttons" component={Projects} />
                <Route path="/documentation" component={Documentation} />
                <Route path="/examples" component={Examples} />
                <Route path="/" exact={true} component={Home} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default App