import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  form: {
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
};

class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: '', password: '' });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1 style={styles.title}>Страница логина</h1>
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          style={styles.form}
        >
          <TextField
            style={styles.label}
            label="Почта"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <TextField
            style={styles.label}
            label=" Пароль"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Войти
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};
export default connect(null, mapDispatchToProps)(Login);
