import React, { PropTypes } from 'react';
import OneFieldForm from './OneFieldForm';
import { browserHistory } from 'react-router'

class TaleListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.editButtonHandler = this.editButtonHandler.bind(this);
    this.confirmButtonHandler = this.confirmButtonHandler.bind(this);
    this.cancelButtonHandler = this.cancelButtonHandler.bind(this);
    this.removeButtonHandler = this.removeButtonHandler.bind(this);
  }

  editButtonHandler() {
    this.setState({
      isEditing: true,
    });
  }

  confirmButtonHandler(newTaleName) {
    const newTale = Object.assign({}, this.props.data);
    newTale.name = newTaleName;
    this.props.editTale(newTale);
    this.setState({
      isEditing: false,
    });
  }

  cancelButtonHandler() {
    this.setState({
      isEditing: false,
    });
  }

  removeButtonHandler() {
    this.props.removeTale(this.props.data._id);
  }


  render() {
    return (
      <div className="tale-list-entry" onClick={() => browserHistory.push(`/tale/${this.props.data._id}`)}>
        <div className="tale-list-entry__title">
          {this.props.data.title}
        </div>
        <div className="tale-list-entry__snippet">
          {this.props.data.snippet}
        </div>
        <div className="tale-list-entry__read-overlay">
          wread it!
        </div>
      </div>
    );
  }
}

TaleListEntry.propTypes = {
  editTale: PropTypes.func.isRequired,
  removeTale: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default TaleListEntry;
