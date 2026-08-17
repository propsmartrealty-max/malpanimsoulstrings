"use client";

import React, { useState, useEffect } from 'react';

export default function EmiCalculator() {
  const [propertyValue, setPropertyValue] = useState(35000000);
  const [downPayment, setDownPayment] = useState(7000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  // Calculate EMI during render to avoid cascading state updates and satisfy ESLint purity rules
  const principal = propertyValue - downPayment;
  let emi = 0;
  let totalInterest = 0;
  let totalPayment = 0;

  if (principal > 0) {
    const ratePerMonth = interestRate / 12 / 100;
    const numberOfMonths = loanTenure * 12;

    if (ratePerMonth === 0) {
      emi = Math.round(principal / numberOfMonths);
      totalPayment = principal;
      totalInterest = 0;
    } else {
      const calculatedEmi = 
        (principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfMonths)) / 
        (Math.pow(1 + ratePerMonth, numberOfMonths) - 1);
      emi = Math.round(calculatedEmi);
      totalPayment = emi * numberOfMonths;
      totalInterest = totalPayment - principal;
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

  const setPreset = (propVal, downVal) => {
    setPropertyValue(propVal);
    setDownPayment(downVal);
  };

  return (
    <div className="card border-0 p-4 p-md-5" style={{ background: 'var(--color-surface)', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', border: '1px solid rgba(212,175,55,0.2)' }}>
      {/* Preset Quick Selectors */}
      <div className="mb-4">
        <label className="form-label text-white small fw-bold mb-2">Select Luxury Configuration Preset:</label>
        <div className="d-flex flex-wrap gap-2">
          <button 
            type="button" 
            className={`btn btn-sm ${propertyValue === 19500000 ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
            onClick={() => setPreset(19500000, 3900000)}
            style={{ borderRadius: '20px', fontSize: '0.8rem' }}
          >
            3 BHK (~₹1.95 Cr)
          </button>
          <button 
            type="button" 
            className={`btn btn-sm ${propertyValue === 35000000 ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
            onClick={() => setPreset(35000000, 7000000)}
            style={{ borderRadius: '20px', fontSize: '0.8rem' }}
          >
            4 BHK (~₹3.50 Cr)
          </button>
          <button 
            type="button" 
            className={`btn btn-sm ${propertyValue === 55000000 ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
            onClick={() => setPreset(55000000, 11000000)}
            style={{ borderRadius: '20px', fontSize: '0.8rem' }}
          >
            5 BHK Duplex (~₹5.50 Cr)
          </button>
          <button 
            type="button" 
            className={`btn btn-sm ${propertyValue === 65000000 ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
            onClick={() => setPreset(65000000, 13000000)}
            style={{ borderRadius: '20px', fontSize: '0.8rem' }}
          >
            Sky Penthouse (~₹6.50 Cr)
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="propValue" className="form-label d-flex justify-content-between w-100" style={{ color: 'var(--color-text)' }}>
          <span>Property Value</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{formatCurrency(propertyValue)}</span>
        </label>
        <input 
          type="range" 
          className="form-range" 
          id="propValue" 
          min="18000000" 
          max="75000000" 
          step="500000" 
          value={propertyValue} 
          onChange={(e) => {
            const val = Number(e.target.value);
            setPropertyValue(val);
            if (downPayment >= val) {
              setDownPayment(val * 0.2);
            }
          }}
          style={{ accentColor: 'var(--color-primary)' }}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="downPayment" className="form-label d-flex justify-content-between w-100" style={{ color: 'var(--color-text)' }}>
          <span>Down Payment ({( (downPayment / propertyValue) * 100 ).toFixed(0)}%)</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{formatCurrency(downPayment)}</span>
        </label>
        <input 
          type="range" 
          className="form-range" 
          id="downPayment" 
          min="1000000" 
          max={propertyValue * 0.8} 
          step="500000" 
          value={downPayment} 
          onChange={(e) => setDownPayment(Number(e.target.value))}
          style={{ accentColor: 'var(--color-primary)' }}
        />
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <label htmlFor="interestRate" className="form-label d-flex justify-content-between w-100" style={{ color: 'var(--color-text)' }}>
            <span>Interest Rate</span>
            <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{interestRate}%</span>
          </label>
          <input 
            type="range" 
            className="form-range" 
            id="interestRate" 
            min="7" 
            max="12" 
            step="0.1" 
            value={interestRate} 
            onChange={(e) => setInterestRate(Number(e.target.value))}
            style={{ accentColor: 'var(--color-primary)' }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="loanTenure" className="form-label d-flex justify-content-between w-100" style={{ color: 'var(--color-text)' }}>
            <span>Tenure</span>
            <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{loanTenure} Years</span>
          </label>
          <input 
            type="range" 
            className="form-range" 
            id="loanTenure" 
            min="5" 
            max="30" 
            step="1" 
            value={loanTenure} 
            onChange={(e) => setLoanTenure(Number(e.target.value))}
            style={{ accentColor: 'var(--color-primary)' }}
          />
        </div>
      </div>

      {/* Breakdown Metrics */}
      <div className="row g-2 mb-4 text-center">
        <div className="col-4">
          <div className="p-2 rounded" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span className="text-white-50 small d-block">Loan Principal</span>
            <span className="text-white fw-bold small">{formatCurrency(principal)}</span>
          </div>
        </div>
        <div className="col-4">
          <div className="p-2 rounded" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span className="text-white-50 small d-block">Total Interest</span>
            <span className="text-white fw-bold small">{formatCurrency(totalInterest)}</span>
          </div>
        </div>
        <div className="col-4">
          <div className="p-2 rounded" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span className="text-white-50 small d-block">Total Payable</span>
            <span className="text-white fw-bold small">{formatCurrency(totalPayment)}</span>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-3 text-center" style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))', border: '1px solid rgba(212,175,55,0.3)' }}>
        <h3 className="h6 text-uppercase letter-spacing-1 mb-1" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Estimated Monthly Investment (EMI)</h3>
        <div className="display-6 fw-bold my-2" style={{ color: 'var(--color-primary)' }}>
          {formatCurrency(emi)}<span className="fs-6 text-white-50 fw-normal"> / month</span>
        </div>
        <p className="small text-white-50 mb-0">
          *Indicative estimation. Exclusive customized bank subvention and construction-linked payment plans available.
        </p>
      </div>

      <div className="mt-4 text-center">
        <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary w-100 py-3" style={{ fontSize: '1rem', borderRadius: '30px' }}>
          Download Construction-Linked Payment Schedule & Tax Sheet →
        </a>
      </div>
    </div>
  );
}
