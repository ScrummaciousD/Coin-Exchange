import React from "react";
import CoinList from './Components/CoinList/CoinList';
import AccountBalance from './Components/AccountBalance/AccountBalance';
import Header from './Components/Header/Header';
import styled from 'styled-components';

const Div = styled.div`
text-align: center;
background-color: rgb(20, 56, 97);
color: #cccccc;
`;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: false,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 9999.99
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 32.0,
        price: 299.99
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 0,
        price: 1.00
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        balance: 1000,
        price: 0.20
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 0,
        price: 297.99
      },
    ]
  }

  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map( function( values ) {
      let newValues = {...values};
      if (valueChangeTicker === values.ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price = newValues.price * randomPercentage;
      }
      return newValues;
    });

    this.setState({ coinData: newCoinData });
  }

  handleToggleBalance = () => {
    this.setState({showBalance: ! this.state.showBalance});
  }

  render() {
    return (
      <Div>
        <Header/>
        <AccountBalance amount= {this.state.balance} showBalance={this.state.showBalance}
          handleToggleBalance = {this.handleToggleBalance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh}
          showBalance = {this.state.showBalance} />
      </Div>
    );
  }
}


export default App;
