import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


//imports
import Signin from './user/singin';
import Home from './components/Home';
import UserDashboard from './user/UserDashboard';
import Layout from './components/Layout';
import PrivateRoute from './user/privateRoute';


function App() {
  return (
      <Router>
        <Switch>
          <Layout>
          <Route exact path='/' component={Home}/>
          <Route exact path='/signin' component={Signin}/>

          {/* PrivateRoutes */}
          <PrivateRoute exact path='/user/dashboard' component={UserDashboard} /> 

        </Layout>
        </Switch>

      </Router>
  );
}

export default App;
