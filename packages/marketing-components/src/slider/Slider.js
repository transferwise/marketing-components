import React, { Component } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import Types from 'prop-types';
import MoneySlider from './MoneySlider';
import FeeBreakdown from './FeeBreakdown';
import availableCurrencies from './availableCurrencies';

class Slider extends Component {
  static propTypes = {
    title: Types.string.isRequired,
  };

  state = {
    amount: 250000,
    selectedSourceCurrency: 'gbp',
    selectedTargetCurrency: 'eur',
    averageFee: null,
    totalFees: null,
  };

  componentDidMount() {
    this.getFeesForBankTransfer();
  }
  // Title
  // Slider
  // Money input | currency switcher | currency input
  // average fee % | Total fees
  // Debounce
  // Fetch fees from the api

  // sourceAmount=740000&sourceCurrency=GBP&targetCurrency=CHF
  getFeesForBankTransfer = () => {
    const upperCaseSourceCurrency = this.state.selectedSourceCurrency.toUpperCase();
    const upperCaseTargetCurrency = this.state.selectedTargetCurrency.toUpperCase();
    fetch(
      `/gateway/v3/price?sourceAmount=${this.state.amount}&sourceCurrency=${upperCaseSourceCurrency}&targetCurrency=${upperCaseTargetCurrency}`,
      {
        mehtod: 'GET',
      },
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return null;
      })
      .then((data) => {
        const bankTransferPricing = data.filter((obj) => {
          return obj.payInMethod === 'BANK_TRANSFER' && obj.payOutMethod === 'BANK_TRANSFER';
        });
        this.setState({
          averageFee: bankTransferPricing[0].variableFeePercent,
          totalFees: bankTransferPricing[0].total,
        });
        console.log(
          'result: ',
          bankTransferPricing[0].variableFeePercent,
          bankTransferPricing[0].total,
        );
      });
  };

  callGetPricesAPIDebounced = () => AwesomeDebouncePromise(this.getFeesForBankTransfer(), 250);

  handleAmountChange = async (newAmount) => {
    this.setState({ amount: parseInt(newAmount, 0) });
    await this.callGetPricesAPIDebounced();
  };

  handleCurrencySwitch = () => {
    this.setState(
      (prevState) => {
        return {
          selectedSourceCurrency: prevState.selectedTargetCurrency,
          selectedTargetCurrency: prevState.selectedSourceCurrency,
        };
      },
      () => this.getFeesForBankTransfer(),
    );
  };

  handleCurrencyChange = (sourceOrTarget, currency) => {
    if (
      (sourceOrTarget === 'source' && currency === this.state.selectedTargetCurrency) ||
      (sourceOrTarget === 'target' && currency === this.state.selectedSourceCurrency)
    ) {
      return this.handleCurrencySwitch();
    }
    return sourceOrTarget === 'source'
      ? this.setState({ selectedSourceCurrency: currency }, () => this.getFeesForBankTransfer())
      : this.setState({ selectedTargetCurrency: currency }, () => this.getFeesForBankTransfer());
  };
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <button onClick={() => this.getFeesForBankTransfer()} type="button">
          Let's get the fee data with this click
        </button>
        <MoneySlider
          amount={this.state.amount}
          sourceCurrencyData={availableCurrencies[this.state.selectedSourceCurrency]}
          targetCurrencyData={availableCurrencies[this.state.selectedTargetCurrency]}
          onAmountChange={this.handleAmountChange}
          onCurrencySwitch={this.handleCurrencySwitch}
          onCurrencyChange={this.handleCurrencyChange}
        />
        <FeeBreakdown averageFee={this.state.averageFee} totalFees={this.state.totalFees} />
      </>
    );
  }
}

Slider.propTypes = {
  title: Types.string,
};

Slider.defaultProps = {
  title: null,
};

export default Slider;
