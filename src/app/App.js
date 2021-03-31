import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from 'react-router-dom';
import { Header } from '../Components/Header';
import { ContentBody } from '../Components/Body';
import { Footer } from '../Components/Footer';
import { CssBaseline } from '@material-ui/core';


const App = () => {

  //const classes = AppStyles;
  
  return (
    <>
      <CssBaseline />
      <Router>
      <div className="App">
        <Switch>
          <Route 
            exact path="/"
            render={() => (
              <React.Fragment>
                <Header />
                <ContentBody />
                <Footer />
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
    </>

  )
}

export default App;
