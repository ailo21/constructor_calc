import React from 'react';
import CalcDisplay from './CalcDisplay';
import CalcOperationList from './CalcOperationList';
import CalcNumbersList from './CalcNumbersList';
import CalcEqual from './CalcEqual';

const OpacityPlaceholder = () => (
  <div className="opacity_placeholder">

    <CalcDisplay />
    <CalcOperationList />
    <CalcNumbersList />
    <CalcEqual />
  </div>
);

export default OpacityPlaceholder;
