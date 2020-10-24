import React,{ Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Login from './pages/loginpage/login';
import Register from './pages/signuppage/signup';
import ResetPassword from './pages/resetpasswordpage/reset';
import ForgetPassword from './pages/forgetpassword/forgetpassword';
import HomePage from './pages/homepage/Home';
import DashboardContainer from './pages/dashboardcontainer/dashboardcontainer';

class App extends Component{

  render(){

    return (
      <div>
        <Switch>
        <Route path="/resetpassword/:token"  component={ResetPassword} />
        <Route path="/forgetpassword"  component={ ForgetPassword} />
          <Route path="/register"  component={Register} />
          <Route path="/login"  component={Login} />
          <Route path="/dashboard" component={DashboardContainer}/>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );

  }
}

export default App;
