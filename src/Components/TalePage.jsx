import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from '../Actions/Creators';

class TalePage extends React.Component {

  componentDidMount() {
    this.props.getTale(this.props.params.id);
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.props.tale)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tale: state.tales.currentTale,
});

const mapDispatchToProps = dispatch => ({
  getTale: (taleId) => {
    dispatch(Actions.getTale(taleId));
  },
});

TalePage.propTypes = {
  params: PropTypes.object,
};


export default connect(mapStateToProps, mapDispatchToProps)(TalePage);
