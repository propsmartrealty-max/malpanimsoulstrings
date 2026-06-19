"use client";

import React, { useState, useEffect } from 'react';

export default function EmiCalculator() {
  const [propertyValue, setPropertyValue] = useState(25000000);
  const [downPayment, setDownPayment] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  // Calculate EMI during render to avoid cascading state updates and satisfy ESLint purity rules
  const principal = propertyValue - downPayment;
  let emi = 0;
  if (principal > 0) {
    const ratePerMonth = interestRate / 12 / 100;
    const numberOfMonths = loanTenure * 12;

    if (ratePerMonth === 0) {
      emi = Math.round(principal / numberOfMonths);
    } else {
      const calculatedEmi = 
        (principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfMonths)) / 
        (Math.pow(1 + ratePerMonth, numberOfMonths) - 1);
      emi = Math.round(calculatedEmi);
    }
  }

  useEffect(() => {
    const trackingHandler = setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'emi_calculated',
          propertyValue,
          downPayment,
          loanAmount: propertyValue - downPayment,
          interestRate,
          loanTenure,
          estimatedEmi: emi,
          pagePath: window.location.pathname
        });
      }
    }, 2000); // 2-second debounce to avoid spamming events on drag

    return () => clearTimeout(trackingHandler);
  }, [propertyValue, downPayment, interestRate, loanTenure, emi]);

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="card border-0 p-4 p-md-5" style={{ background: 'var(--color-surface)', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
      <div className="mb-4">
        <label htmlFor="propValue" className="form-label d-flex justify-content-between w-100" style={{ color: 'var(--color-text)' }}>
          <span>Property Value</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{formatCurrency(propertyValue)}</span>
        </label>
        <input 
          type="range" 
          className="form-range" 
          id="propValue" 
          min="15000000" 
          max="50000000" 
          step="500000" 
          value={propertyValue} 
          onChange={(e) => {
            const val = Number(e.target.value);
            setPropertyValue(val);
            if (downPayment >= val) {
              setDownPayment(val * 0.2); // Auto adjust down payment to 20% if it exceeds property value
            }
          }}
          style={{ accentColor: 'var(--color-primary)' }}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="downPayment" className="form-label d-flex justify-content-between w-100" style={{ color: 'var(--color-text)' }}>
          <span>Down Payment</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{formatCurrency(downPayment)}</span>
        </label>
        <input 
          type="range" 
          className="form-range" 
          id="downPayment" 
          min="0" 
          max={propertyValue} 
          step="100000" 
          value={downPayment} 
          onChange={(e) => setDownPayment(Number(e.target.value))}
          style={{ accentColor: 'var(--color-primary)' }}
        />
      </div>

      <div className="row mb-4">
        <div className="col-6">
          <label htmlFor="interestRate" className="form-label" style={{ color: 'var(--color-text)' }}>Interest Rate (%)</label>
          <input 
            type="number" 
            className="form-control" 
            id="interestRate" 
            value={interestRate} 
            step="0.1" 
            onChange={(e) => setInterestRate(Number(e.target.value))}
            style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--color-text)', border: '1px solid rgba(212,175,55,0.2)' }}
          />
        </div>
        <div className="col-6">
          <label htmlFor="loanTenure" className="form-label" style={{ color: 'var(--color-text)' }}>Tenure (Years)</label>
          <input 
            type="number" 
            className="form-control" 
            id="loanTenure" 
            value={loanTenure} 
            min="1" 
            max="30" 
            onChange={(e) => setLoanTenure(Number(e.target.value))}
            style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--color-text)', border: '1px solid rgba(212,175,55,0.2)' }}
          />
        </div>
      </div>

      <div className="mt-5 p-4 rounded text-center" style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(0,0,0,0) 100%)', border: '1px solid rgba(212,175,55,0.3)' }}>
        <h5 style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Estimated Monthly EMI</h5>
        <h2 className="display-4 fw-bold mb-0 gradient-text" style={{ fontSize: '2.5rem' }}>{formatCurrency(emi)}</h2>
        <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem', marginBottom: 0 }}>
          Loan Amount: <strong>{formatCurrency(propertyValue - downPayment)}</strong>
        </p>
      </div>
    </div>
  );
}
