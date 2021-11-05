import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero/Hero'
import Input from './components/Input/Input'
import Error from './components/Error/Error'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={props => <Input {...props} />} />
          <Route exact path="/profile/:username" render={props => <Hero {...props} />} />
          <Route exact path="/error" render={props => <Error {...props} />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
