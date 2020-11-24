import React from 'react';
import Types from 'prop-types';

// TODO: Need to add currencyFORMATTER HERE!!!!!
const FeeBreakdown = ({ averageFee, totalFees }) => {
  return (
    <>
      Average Fees: {averageFee}% | Total fees: {totalFees}
    </>
  );
};

FeeBreakdown.propTypes = {
  averageFee: Types.number.isRequired,
  totalFees: Types.number.isRequired,
};

export default FeeBreakdown;
