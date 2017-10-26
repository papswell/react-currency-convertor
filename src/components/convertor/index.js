import React, { Component } from 'react';
import Amount from './../amount';

import {
  to,
  from,
} from './../../utils/convert';

import './convertor.css';

class Convertor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      currency: props.currencies[0],
    }
  }

  handleInputChange = (value, symbol) => {
    this.setState({
      value,
      currency: this.props.currencies.find(c => c.symbol === symbol),
    });
  }

  render() {

    const { currency, value } = this.state;

    const euroValue = to(value, currency.coeff);

    return (
      <div className="convertor">

        {this.props.currencies
          .map((c) => {

            if (c === currency) {
              return <Amount
                key={currency.symbol}
                currency={currency.symbol}
                inputValue={value}
                onInputChange={this.handleInputChange}
              />
            }

            const converted = from(euroValue, c.coeff);

            return (
              <Amount
                key={c.symbol}
                currency={c.symbol}
                inputValue={converted}
                onInputChange={this.handleInputChange}
              />
            )
          })
        }
      </div>
    );
  }
}

export default Convertor;
