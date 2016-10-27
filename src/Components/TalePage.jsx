import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from '../Actions/Creators';
import NewTaleForm from './NewTaleForm';

class TalePage extends React.Component {

  render() {
    return (
      <div>
        {JSON.stringify(params)}
      </div>
    );
  }
}

export default connect(null, null)(TalePage);
