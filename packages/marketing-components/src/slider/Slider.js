import React, { Component } from 'react';
import Types from 'prop-types';
import MoneySlider from './MoneySlider';
import FeeBreakdown from './FeeBreakdown';
import availableCurrencies from './availableCurrencies';

// TODO: Better naming

class Slider extends Component {
  static propTypes = {
    translations: Types.shape({
      title: Types.string.isRequired,
      averageFeeCopy: Types.string.isRequired,
      totalFeesCopy: Types.string.isRequired,
    }).isRequired,
  };

  state = {
    amount: 300000,
    selectedSourceCurrency: 'gbp',
    selectedTargetCurrency: 'eur',
    averageFee: null,
    totalFees: null,
  };

  componentDidMount() {
    this.getFeesForBankTransfer();
  }

  getFeesForBankTransfer = () => {
    const { selectedSourceCurrency, selectedTargetCurrency } = this.state;
    const upperCaseSourceCurrency = selectedSourceCurrency.toUpperCase();
    const upperCaseTargetCurrency = selectedTargetCurrency.toUpperCase();
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
      });
  };

  updateFeesDebounce = debounce(this.getFeesForBankTransfer, 250);

  handleAmountChange = (newAmount) => {
    this.setState({ amount: parseInt(newAmount, 0) });
    this.updateFeesDebounce();
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
    const { selectedSourceCurrency, selectedTargetCurrency } = this.state;
    if (
      (sourceOrTarget === 'source' && currency === selectedTargetCurrency) ||
      (sourceOrTarget === 'target' && currency === selectedSourceCurrency)
    ) {
      return this.handleCurrencySwitch();
    }
    return sourceOrTarget === 'source'
      ? this.setState({ selectedSourceCurrency: currency }, () => this.getFeesForBankTransfer())
      : this.setState({ selectedTargetCurrency: currency }, () => this.getFeesForBankTransfer());
  };
  render() {
    const { title, averageFeeCopy, totalFeesCopy } = this.props.translations;
    const {
      amount,
      selectedSourceCurrency,
      selectedTargetCurrency,
      averageFee,
      totalFees,
    } = this.state;

    return (
      <>
        <h2>{title}</h2>
        <MoneySlider
          amount={amount}
          sourceCurrencyData={availableCurrencies[selectedSourceCurrency]}
          targetCurrencyData={availableCurrencies[selectedTargetCurrency]}
          onAmountChange={this.handleAmountChange}
          onCurrencySwitch={this.handleCurrencySwitch}
          onCurrencyChange={this.handleCurrencyChange}
        />
        <FeeBreakdown
          averageFee={averageFee}
          totalFees={totalFees}
          selectedSourceCurrency={selectedSourceCurrency}
          translations={{
            averageFee: averageFeeCopy,
            totalFees: totalFeesCopy,
          }}
        />
      </>
    );
  }
}

const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export default Slider;
