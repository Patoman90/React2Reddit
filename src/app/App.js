import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from 'react-router-dom';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route 
            exact path="/"
            render={() => (
              <React.Fragment>
                <Header />
                <Footer />
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
