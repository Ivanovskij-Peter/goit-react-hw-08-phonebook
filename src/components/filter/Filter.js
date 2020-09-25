import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

function Filter({ filter, changeFilter }) {
  return (
    <>
      <input
        style={{
          display: 'block',
          marginTop: '5px',
          marginBottom: '10px',
          width: '100%',
        }}
        type="text"
        name="filter"
        value={filter}
        onChange={e => changeFilter(e.target.value)}
        placeholder="find contact"
      ></input>
    </>
  );
}
const mapStateToProps = state => {
  return { contacts: state.contacts.contacts };
};

const mapDispatchToProps = {
  changeFilter: actions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
