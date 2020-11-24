import React from 'react';
import Types from 'prop-types';
import { MoneyInput, Select } from '@transferwise/components';
import availableCurrencies from '../availableCurrencies';

import './MoneySlider.css';

const MoneySlider = ({
  amount,
  sourceCurrencyData,
  targetCurrencyData,
  onAmountChange,
  onCurrencySwitch,
  onCurrencyChange,
}) => {
  return (
    <>
      <input
        type="range"
        value={amount}
        min={100000}
        step={20000}
        max={2000000}
        onChange={(e) => onAmountChange(e.target.value)}
      />
      <div className="m-t-4">
        <div className="money-input">
          <MoneyInput
            amount={amount}
            onAmountChange={(e) => onAmountChange(e)}
            onCurrencyChange={(currencyObject) =>
              onCurrencyChange('source', currencyObject.currency)
            }
            currencies={[
              {
                header: 'Popular currencies',
              },
              { ...availableCurrencies.eur },
              { ...availableCurrencies.gbp },
              { ...availableCurrencies.usd },
              { ...availableCurrencies.aud },
              { ...availableCurrencies.chf },
            ]}
            selectedCurrency={sourceCurrencyData}
          />
        </div>
        <div className="currency-swapper">
          <button
            className="circle circle-sm reverse-icon"
            type="submit"
            onClick={() => onCurrencySwitch()}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              className="icon"
            >
              <path
                d="M18.19 4.49l-.7.7L20.29 8H7.5v1h12.79l-2.8 2.81.7.7 4.02-4.01-4.02-4.01zM6.51 12.19l-.7-.7-4.02 4.01 4.02 4.01.7-.7L3.71 16H16.5v-1H3.71l2.8-2.81z"
                fill="#00b9ff"
              />
            </svg>
          </button>
        </div>
        <div className="target-currency-select">
          <Select
            inverse
            selected={targetCurrencyData}
            onChange={(currencyObject) => onCurrencyChange('target', currencyObject.currency)}
            options={[
              {
                header: 'Popular currencies',
              },
              { ...availableCurrencies.eur },
              { ...availableCurrencies.gbp },
              { ...availableCurrencies.usd },
              { ...availableCurrencies.aud },
              { ...availableCurrencies.chf },
            ]}
          />
        </div>
      </div>
    </>
  );
};

MoneySlider.propTypes = {
  amount: Types.number.isRequired,
  sourceCurrencyData: Types.string.isRequired,
  targetCurrencyData: Types.string.isRequired,
  onAmountChange: Types.func.isRequired,
  onCurrencySwitch: Types.func.isRequired,
  onCurrencyChange: Types.func.isRequired,
};

export default MoneySlider;
