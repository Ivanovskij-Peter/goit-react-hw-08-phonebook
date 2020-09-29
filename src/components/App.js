import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import PhoneBook from './phonebook/PhoneBook';
import Login from './login/Login';
import Register from './register/Register';
import Header from './header/Header';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import { homePage } from './homepage/HomePage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

class App extends Component {
  componentDidMount() {
    this.props.onRefresh();
  }
  render() {
    return (
      <>
        <Header />
        <Switch>
          <PublicRoute exact path="/" component={homePage} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={Register}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={Login}
          />
          <PrivateRoute
            path="/contacts"
            component={PhoneBook}
            redirectTo="/login"
          />
        </Switch>
      </>
    );
  }
}
const mapDispatchToProps = {
  onRefresh: authOperations.getCurrrentUser,
};

export default connect(null, mapDispatchToProps)(App);
