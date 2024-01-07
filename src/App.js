import {BrowserRouter as Router, Route} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./store";
import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import Cart from "./components/Cart"

const routerBaseName = "https://taheermattur.github.io/Happay-Ecommerce-Assignment/";

function App() {
  return (
    <Router basename={routerBaseName}>
     <Provider store={store}>
     <Nav />
     <Route path="/" exact component={Home} />
     <Route path="/cart" exact component={Cart} />
     </Provider>
    </Router>
  );
}

export default App;


