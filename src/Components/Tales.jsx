import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from '../Actions/Creators';
import TaleList from './TaleList';
import OneFieldForm from './OneFieldForm';

const Tales = ({ createTale, editTale, removeTale, tales }) => (
  <div>
    <TaleList tales={tales} removeTale={removeTale} editTale={editTale} />
    <OneFieldForm handleSubmit={createTale} buttonText="Add" required />
  </div>
);


const mapStateToProps = state => ({
  tales: state.tales,
});

const mapDispatchToProps = dispatch => ({
  removeTale: (taleId) => {
    dispatch(Actions.removeTale(taleId));
  },
  createTale: (taleName) => {
    dispatch(Actions.createTale(taleName));
  },
  editTale: (newTale) => {
    dispatch(Actions.editTale(newTale));
  },
});

Tales.propTypes = {
  createTale: PropTypes.func.isRequired,
  editTale: PropTypes.func.isRequired,
  removeTale: PropTypes.func.isRequired,
  tales: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tales);
