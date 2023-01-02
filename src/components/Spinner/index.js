import React from 'react';
import './styles.css';

export default function Spinner() {
  return (
    <div className="Spinner">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
