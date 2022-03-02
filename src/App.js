import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./components/pages/mainpages/Home"
import Espace from "./components/pages/mainpages/Espace"
import Vendeur from "./components/pages/mainpages/Vendeur"
import Login from "./components/pages/mainpages/Login"
import Inscription from "./components/pages/mainpages/Inscription"
import Acheteur from "./components/pages/mainpages/Acheteur"
import Apropos from "./components/pages/mainpages/Apropos"
import ForgetPassword from "./components/pages/mainpages/ForgetPassword"
import Alerts from "./components/pages/content/Alerts"


function App() {
  return (
    <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/vendeur" component={Vendeur} />
            <Route path="/inscription" component={Inscription} />
            <Route path="/login" component={Login} />
            <Route path="/espace" component={Espace} />
            <Route path="/acheteur" component={Acheteur} />
            <Route path="/apropos" component={Apropos} />
            <Route path="/forgetpassword" component={ForgetPassword} />
            <Route path="/alerts" component={Alerts} />
          </Switch>
        </Router>
    </>
  )
}

export default App
