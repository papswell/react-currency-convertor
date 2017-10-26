import React, { Component } from 'react';

class Amount extends Component {

  handleChange = (e) => {

    let newValue = e.target.value;
    const currency = this.props.currency;

    this.props.onInputChange(newValue, currency);
  }

  handleFocus = (e) => {
    try {
      this.$input.setSelectionRange(0, this.$input.value.length)
    } catch(e) {
      console.error(e);
    }
  }

  render() {

    const {
      currency, inputValue
    } = this.props;

    return (
      <div className="input-group">
        <input
          type="number"
          step="0.01"
          className="form-control"
          value={inputValue}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          ref={(input) => { this.$input = input; }}
        />
        <span className="input-group-addon" style={{ width:'40px' }}>
          {currency}
        </span>
      </div>
    );
  }
}

export default Amount;
