import React, { Component } from 'react';
import Convertor from './components/convertor';

const CURRENCIES = [
  {
    symbol: '€',
    coeff: 1,
  },
  {
    symbol: '$',
    coeff: 1.178545,
  },
  {
    symbol: '£',
    coeff: 0.893402266,
  },
  {
    symbol: '¥',
    coeff: 133.803928,
  },
];

class App extends Component {
  render() {
    return (
      <Convertor
        currencies={CURRENCIES}
        ref={(component) => {
          console.log('COMPOSANT', component);
        }}
      />
    );
  }
}

export default App;
