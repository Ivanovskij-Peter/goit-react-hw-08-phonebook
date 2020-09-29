import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1 style={styles.title}>Страница регистрации</h1>
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          style={styles.form}
        >
          <TextField
            style={styles.label}
            label="Имя"
            variant="outlined"
            type="name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
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
            label="Пароль"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Зарегистрироваться
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Register);
