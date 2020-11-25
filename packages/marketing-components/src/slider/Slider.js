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
    selectedSourceCurrency: 'GBP',
    selectedTargetCurrency: 'EUR',
    averageFee: null,
    totalFees: null,
  };

  componentDidMount() {
    this.getFeesForBankTransfer();
  }

  componentDidUpdate(prevState) {
    const amountChanged = this.state.amount !== prevState.amount;
    const sourceCurrencyChange =
      this.state.selectedSourceCurrency !== prevState.selectedSourceCurrency;
    const targetCurrencyChange =
      this.state.selectedTargetCurrency !== prevState.selectedTargetCurrency;
    if (amountChanged) {
      this.updateFeesDebounce();
    } else if (sourceCurrencyChange || targetCurrencyChange) {
      this.getFeesForBankTransfer();
    }
  }

  getFeesForBankTransfer = () => {
    const { selectedSourceCurrency, selectedTargetCurrency } = this.state;
    const upperCaseSourceCurrency = selectedSourceCurrency;
    const upperCaseTargetCurrency = selectedTargetCurrency;
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
        const bankTransferPricing = data.find((obj) => {
          return obj.payInMethod === 'BANK_TRANSFER' && obj.payOutMethod === 'BANK_TRANSFER';
        });
        this.setState({
          averageFee: bankTransferPricing.variableFeePercent,
          totalFees: bankTransferPricing.total,
        });
      });
  };

  updateFeesDebounce = debounce(this.getFeesForBankTransfer, 250);

  handleAmountChange = (newAmount) => {
    this.setState({ amount: parseInt(newAmount, 0) });
  };

  handleCurrencySwitch = () => {
    this.setState((prevState) => {
      return {
        selectedSourceCurrency: prevState.selectedTargetCurrency,
        selectedTargetCurrency: prevState.selectedSourceCurrency,
      };
    });
  };

  handleSourceCurrencyChange = (currency) => {
    const { selectedTargetCurrency } = this.state;
    const upperCaseCurrency = currency.toUpperCase();
    if (upperCaseCurrency === selectedTargetCurrency) {
      return this.handleCurrencySwitch();
    }
    return this.setState({ selectedSourceCurrency: upperCaseCurrency });
  };

  handleTargetCurrencyChange = (currency) => {
    const { selectedSourceCurrency } = this.state;
    const upperCaseCurrency = currency.toUpperCase();
    if (upperCaseCurrency === selectedSourceCurrency) {
      return this.handleCurrencySwitch();
    }
    return this.setState({ selectedTargetCurrency: upperCaseCurrency });
  };

  // handleCurrencyChange = (sourceOrTarget, currency) => {
  //   const { selectedSourceCurrency, selectedTargetCurrency } = this.state;
  //   const upperCaseCurrency = currency.toUpperCase();
  //   if (
  //     (sourceOrTarget === 'source' && upperCaseCurrency === selectedTargetCurrency) ||
  //     (sourceOrTarget === 'target' && upperCaseCurrency === selectedSourceCurrency)
  //   ) {
  //     return this.handleCurrencySwitch();
  //   }
  //   return sourceOrTarget === 'source'
  //     ? this.setState({ selectedSourceCurrency: upperCaseCurrency })
  //     : this.setState({ selectedTargetCurrency: upperCaseCurrency });
  // };
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
          onSourceCurrencyChange={this.handleSourceCurrencyChange}
          onTargetCurrencyChange={this.handleTargetCurrencyChange}
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
