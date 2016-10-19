import React, { PropTypes } from 'react';

class NewTaleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onBodyChange(e) {
    this.setState({
      body: e.target.value,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit({
      title: this.state.title,
      body: this.state.body,
    });
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <div className="new-tale-form">
        <h1>New Tale</h1>
        <form
          className="new-tale-form__input-area"
          onSubmit={this.onFormSubmit}
        >
          <br />
          <input
            className="new-tale-form__input-area__input"
            value={this.state.title}
            type="text"
            onChange={this.onTitleChange}
            placeholder="Title"
            required
          />
          <br />
          <textarea
            className="new-tale-form__input-area__input"
            value={this.state.body}
            onChange={this.onBodyChange}
            placeholder="Body of Chapter 1"
            required
          />
          <br />
          <button
            type="submit"
            className="new-tale-form__submit-button"
          >
            Create Tale
          </button>
        </form>
      </div>);
  }
}

NewTaleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default NewTaleForm;
