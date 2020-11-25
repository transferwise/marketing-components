import React from 'react';
import Types from 'prop-types';

// TODO: Need to add currencyFORMATTER HERE!!!!!
const FeeBreakdown = ({ averageFee, totalFees, selectedSourceCurrency, translations }) => {
  return (
    <>
      {translations.averageFee}: {averageFee}% | {translations.totalFees}: {totalFees}{' '}
      {selectedSourceCurrency.toUpperCase()}
    </>
  );
};

FeeBreakdown.propTypes = {
  translations: Types.shape({
    averageFee: Types.string.isRequired,
    totalFees: Types.string.isRequired,
  }).isRequired,
  averageFee: Types.number,
  totalFees: Types.number,
  selectedSourceCurrency: Types.string.isRequired,
};

FeeBreakdown.defaultProps = {
  averageFee: null,
  totalFees: null,
};

export default FeeBreakdown;
