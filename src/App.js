import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components';
import GlobalStyle from './globalStyles'
import Hash from './pages/Hash/Hash';
import Home from './pages/HomePage/Home';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <Router>

      <GlobalStyle />
      <Navbar />
      <Switch>
        <SnackbarProvider maxSnack={3}>
          <Route path='/' exact component={Home} />
          <Route path='/hash' component={Hash} />
        </SnackbarProvider>
      </Switch>
    </Router>
  );
}

export default App;
