import {Switch, Route} from 'react-router-dom'
import LogIn from './components/Login'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LogIn} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <NotFound />
    </Switch>
  </>
)

export default App
