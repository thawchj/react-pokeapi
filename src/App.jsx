
import { Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import PokemonPage from './pages/PokemonPage'

function App() {
  return (
    <Routes>
         <Route path="/" exact={true} Component={Home} />
         <Route path="/pokemon/:pokeid" exact={true} Component={PokemonPage} />
         
    </Routes>
  );
}

export default App;
