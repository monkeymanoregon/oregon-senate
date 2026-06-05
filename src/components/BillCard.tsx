"use client";

import { useState } from "react";
import BillVoter from "./BillVoter";

export interface OregonMeasureFull {
  MeasurePrefix: string;
  MeasureNumber: number;
  CatchLine: string;
  MeasureSummary: string;
  CurrentLocation: string;
  RelatingTo: string;
  FiscalImpact: string | null;
  RevenueImpact: string | null;
  EffectiveDate: string | null;
  ModifiedDate: string | null;
  FiscalDocumentUrl?: string | null;
  RevenueDocumentUrl?: string | null;
}

export default function BillCard({ bill }: { bill: OregonMeasureFull }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const billId = `${bill.MeasurePrefix}${bill.MeasureNumber}`;

  return (
    <>
      {/* Main Card */}
      <div className="bill-card">
        <div className="bill-header">
          <h3>{bill.MeasurePrefix} {bill.MeasureNumber}</h3>
          <span className="bill-status">{bill.CurrentLocation}</span>
        </div>
        <div className="bill-content">
          <p className="bill-summary">{bill.CatchLine}</p>
          <button 
            className="btn-read-more" 
            onClick={() => setIsModalOpen(true)}
          >
            Read Full Details &raquo;
          </button>
        </div>
        <div className="bill-footer">
          <BillVoter billId={billId} />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{bill.MeasurePrefix} {bill.MeasureNumber} Details</h2>
              <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-meta">
                <span className="meta-tag status-tag"><strong>Status:</strong> {bill.CurrentLocation}</span>
                {bill.EffectiveDate && (
                  <span className="meta-tag"><strong>Effective:</strong> {new Date(bill.EffectiveDate).toLocaleDateString()}</span>
                )}
              </div>
              
              <div className="modal-section">
                <h4>Full Summary</h4>
                <p className="modal-summary-text">{bill.MeasureSummary}</p>
              </div>

              {(bill.FiscalImpact || bill.RevenueImpact) && (
                <div className="modal-section impact-grid">
                  {bill.FiscalImpact && (
                    <div className="impact-box">
                      <strong>Fiscal Impact</strong>
                      <p>{bill.FiscalImpact}</p>
                      {bill.FiscalDocumentUrl && (
                        <a href={bill.FiscalDocumentUrl} target="_blank" rel="noreferrer" className="btn-read-more" style={{fontSize: '0.85rem', marginTop: '0.5rem', display: 'inline-block'}}>
                          View Official PDF
                        </a>
                      )}
                    </div>
                  )}
                  {bill.RevenueImpact && (
                    <div className="impact-box">
                      <strong>Revenue Impact</strong>
                      <p>{bill.RevenueImpact}</p>
                      {bill.RevenueDocumentUrl && (
                        <a href={bill.RevenueDocumentUrl} target="_blank" rel="noreferrer" className="btn-read-more" style={{fontSize: '0.85rem', marginTop: '0.5rem', display: 'inline-block'}}>
                          View Official PDF
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}

              {bill.RelatingTo && (
                <div className="modal-section">
                  <h4>Relating To</h4>
                  <p>{bill.RelatingTo}</p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <p style={{marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)'}}>
                Ready to cast your vote? Tysan will vote according to the consensus.
              </p>
              <BillVoter billId={billId} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
