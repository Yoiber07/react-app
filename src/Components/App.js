import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Todos from '../Components/Todos/Todos'
import Sedes from '../Components/Sedes/Sedes'



function App() {
    return(
        <>
       
     <Navbar/>
      <Router>
      <Switch> 
      <Todos/>, <Sedes/>
      <Route path="/" exact component={Todos}/>
      <Route path="/" exact component={Sedes}/>
      </Switch>
      </Router>
    
      </>
    );
}

export default App;