import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import addContact from '../redux/contact/contacts-operations';
import { connect } from 'react-redux';

class ContactsForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  handleChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addContact({
      name: this.state.name,
      id: uuidv4(),
      number: this.state.number,
    });
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          border: '1px solid whisper',
          width: '400px',
          height: '165px',
        }}
      >
        <label>Name</label>
        <input
          name="name"
          style={{
            display: 'block',
            marginTop: '5px',
            marginBottom: '10px',
            width: '100%',
          }}
          placeholder="add name"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <label>Number</label>
        <input
          name="number"
          style={{
            display: 'block',
            marginTop: '5px',
            marginBottom: '10px',
            width: '100%',
          }}
          placeholder="add number"
          value={this.state.number}
          onChange={this.handleChange}
        ></input>

        <button
          style={{
            marginTop: '15px',
            width: '100%',
            backgroundColor: 'royalblue',
            color: 'white',
            height: '35px',
          }}
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default connect(null, addContact)(ContactsForm);
