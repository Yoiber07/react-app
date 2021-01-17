import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Todos from '../Components/Todos/Todos'
import Sedes from '../Components/Sedes/Sedes'
import Rutas from '../routes/Rutas'
import MenuLateral from './MenuLateral'
import Menu from './Menu'
import Navegador from './Navegador'



const App = () => {
    return (
        <div className="">
            <Navbar />
            <Navegador />
            <Menu />
          {/*   <MenuLateral /> */}
            <div >
                <div >
                    <Router>
                        <Switch>
                            {/* <Todos />, <Sedes /> */}
                            <Route exact path="/" component={Todos} />
                            {/* <Route exact path="/sedes" component={Sedes} /> */}
                        </Switch>
                    </Router>
                </div>
            </div>

        </div>
    );
}

export default App;