import React from 'react';
import DateTimePickerExampleTemplate from './DateTimePickerExampleTemplate';

const DateTimePickerExample = () => (
  <DateTimePickerExampleTemplate
    timeInputAttributes={{ id: 'time-input-example', readOnly: true }}
  />
);

export default DateTimePickerExample;
