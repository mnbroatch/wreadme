import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from '../Actions/Creators';
import NewTaleForm from './NewTaleForm';

const NewTale = ({ createTale }) =>
  (<div>
    <NewTaleForm handleSubmit={createTale} />
  </div>);

const mapDispatchToProps = dispatch => ({
  createTale: (newTale) => {
    dispatch(Actions.createTale(newTale));
  },
});

NewTale.propTypes = {
  createTale: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NewTale);
