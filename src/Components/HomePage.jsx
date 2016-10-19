import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from '../Actions/Creators';
import IntroductionArea from './IntroductionArea';
import TaleListArea from './TaleListArea';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getTopTales();
  }

  render() {
    return (<div className="home-page">
      <IntroductionArea />
      <TaleListArea
        editTale={this.props.editTale}
        removeTale={this.props.removeTale}
        tales={this.props.tales}
      />
    </div>);
  }
}


const mapStateToProps = state => ({
  tales: state.tales.topTales,
});

const mapDispatchToProps = dispatch => ({
  removeTale: (taleId) => {
    dispatch(Actions.removeTale(taleId));
  },
  editTale: (newTale) => {
    dispatch(Actions.editTale(newTale));
  },
  getTopTales: (newTale) => {
    dispatch(Actions.getTopTales(newTale));
  },
});

HomePage.propTypes = {
  editTale: PropTypes.func.isRequired,
  removeTale: PropTypes.func.isRequired,
  getTopTales: PropTypes.func.isRequired,
  tales: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
