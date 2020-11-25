import React from 'react';

import SliderComponent from './Slider';

export default {
  component: Slider,
  title: 'Slider',
};

const Translations = {
  title: 'This is Slider component',
  averageFeeCopy: 'Average fee',
  totalFeesCopy: 'Total fees',
};

export const Slider = () => {
  return <SliderComponent translations={Translations} />;
};
