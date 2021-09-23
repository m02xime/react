import './App.css';
import Navigation from './navigation';
import Acceuil from './Acceuil';
import Contact from './Contact';
import News from './News';
import Footer from './footer';
import ScrollToTop from "./scrollToTop";

import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
        <Router>
        <ScrollToTop />
        <header className="App-header">
        <Navigation />
        <Route path="/" exact component={Acceuil}></Route>
        <Route path="/Contact" exact component={Contact}></Route>
        <Route path="/News" exact component={News}></Route>
        </header>
        <Footer/>
      </Router>
 



    </div>
  );
}

export default App;
