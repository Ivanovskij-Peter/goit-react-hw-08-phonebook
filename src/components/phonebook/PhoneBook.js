import React, { Component } from 'react';
import Filter from '../filter/Filter';
import ContactsForm from '../contacts/ContactsForm';
import ContactsItems from '../contacts/ContactsItems';
import './PhoneBook.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import operations from '../contacts-operations';

class PhoneBook extends Component {
  state = {
    isExsist: false,
  };
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="container">
        <CSSTransition
          in={true}
          appear={true}
          classNames="Phone-slideIn"
          timeout={1000}
          unmountOnExit
        >
          <h1 className="Phone">PhoneBook</h1>
        </CSSTransition>
        <CSSTransition
          in={this.state.isExsist}
          classNames="alert"
          timeout={500}
          unmountOnExit
        >
          <h2 className="alert">This name is already in contacts!</h2>
        </CSSTransition>
        <ContactsForm />
        <CSSTransition
          //
          in={this.props.filter !== ''}
          timeout={500}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <ContactsItems />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contactsItems: state.contacts.contacts,
  filter: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
