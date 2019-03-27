import React, { Component } from 'react';
import {BrowserRouter as Router,
  Route,} from 'react-router-dom';
import Header from './Views/Header';
import Products from './Components/Products/Products';
import ProductItems from './Components/Containers/Products'
import Industries from './Components/Industries/Industries';
import Footer from './Views/Footer';

class App extends Component {
  render() {
    return (
      <div>
       
        <Router>
          <Header/>
          <Route exact path="/" component={Products}/>
          <Route exact path="/products/:product_name" component={ProductItems}/>
          <Route exact path="/industry" component={Industries}/>
          <Route exact path="/about" component={Industries}/>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
