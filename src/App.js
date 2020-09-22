import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


//imports
import Signin from './user/singin';
import Home from './components/Home';
import UserDashboard from './user/UserDashboard';
import Layout from './components/Layout';
import PrivateRoute from './user/privateRoute';

//User

import UserDashboard2 from './user/UserDashboard2';

///Admin
import AdminDashboard from './admin/AdminDashboard';
import AdminSamples from './admin/AdminSamples';
import BrowseCereals from './admin/BrowseCereals';
import BrowseModels from './admin/BrowseModels';
import BrowsePredictions from './admin/BrowsePredictions';
import BrowseSamples from './admin/BrowseSamples';
import BrowseUsers from './admin/BrowseUsers';
import IndiviualSample from './admin/IndividualSamples';



function App() {
  return (
      <Router>
        <Switch>
          <Layout>
          <Route exact path='/' component={Home}/>
          <Route exact path='/signin' component={Signin}/>

          {/* PrivateRoutes */}
          <PrivateRoute exact path='/user/dashboard' component={UserDashboard} /> 
          <PrivateRoute exact path='/user/private' component={UserDashboard2} />

          <PrivateRoute exact path='/admin/dashboard' component={AdminDashboard} />  
          <PrivateRoute exact path='/admin/samples' component={AdminSamples} />
          <PrivateRoute exact path='/admin/samples/:orderId' component={IndiviualSample} />   
          <PrivateRoute exact path='/admin/browsecereals' component={BrowseCereals} />  
          <PrivateRoute exact path='/admin/browsemodels' component={BrowseModels} />  
          <PrivateRoute exact path='/admin/browsepredictions' component={BrowsePredictions} />
          <PrivateRoute exact path='/admin/browsesamples' component={BrowseSamples} />  
          <PrivateRoute exact path='/admin/browseusers' component={BrowseUsers} />    

        </Layout>
        </Switch>

      </Router>
  );
}

export default App;
