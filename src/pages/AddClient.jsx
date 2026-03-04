import React, { useState } from "react";

const AddClient = () => {
  const [form, setForm] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <style>{`
        .add-client-page{font-family:Inter,ui-sans-serif,system-ui,Arial;color:#e6eef8}
        .page-title{font-size:28px;font-weight:700;margin-bottom:24px;letter-spacing:0.3px;color:#fff}
        .form-section{margin-bottom:26px}
        .section-title{font-size:18px;font-weight:600;margin-bottom:14px;color:#bfe9ff;letter-spacing:0.5px;border-bottom:1px solid rgba(108,167,255,0.2);padding-bottom:10px}
        .form-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px}
        .form-field{position:relative}
        .form-label{font-size:12px;font-weight:600;color:rgba(230,238,248,0.7);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;display:block}\n        .form-input, .form-select, .form-textarea{width:100%;padding:12px 14px;border-radius:10px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.01);color:inherit;outline:none;transition:box-shadow 0.25s, border-color 0.18s, transform 0.18s;font-family:inherit;font-size:14px}\n        .form-input:focus, .form-select:focus, .form-textarea:focus{box-shadow:0 6px 22px rgba(11,120,255,0.08);border-color:rgba(108,167,255,0.6);transform:translateY(-2px)}\n        .form-textarea{resize:vertical;min-height:120px}\n        .form-actions{display:flex;gap:12px;margin-top:32px}\n        .btn-primary{padding:12px 28px;border-radius:10px;border:0;cursor:pointer;background:linear-gradient(90deg,#06b6d4,#7c3aed);color:#031025;font-weight:700;box-shadow:0 8px 30px rgba(124,58,237,0.12);transition:transform 0.18s, box-shadow 0.18s}\n        .btn-primary:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(124,58,237,0.2)}\n        .btn-secondary{padding:12px 28px;border-radius:10px;border:1px solid rgba(255,255,255,0.1);background:transparent;color:rgba(230,238,248,0.9);font-weight:600;cursor:pointer;transition:background 0.18s, border-color 0.18s}\n        .btn-secondary:hover{background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.2)}\n        @media (max-width:780px){.form-grid{grid-template-columns:1fr}}\n      `}</style>

      <div className="add-client-page">
        <div className="page-title">➕ Add New Client</div>

        <div className="form-section">
          <div className="section-title">Personal Information</div>
          <div className="form-grid">
            <div className="form-field">
              <label className="form-label">First Name</label>
              <input type="text" name="firstName" className="form-input" placeholder="John" onChange={handleChange} />
            </div>
            <div className="form-field">
              <label className="form-label">Last Name</label>
              <input type="text" name="lastName" className="form-input" placeholder="Doe" onChange={handleChange} />
            </div>
            <div className="form-field">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-input" placeholder="john@example.com" onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="section-title">Contact Information</div>
          <div className="form-grid">
            <div className="form-field">
              <label className="form-label">Phone</label>
              <input type="tel" name="phone" className="form-input" placeholder="+1 555 123 4567" onChange={handleChange} />
            </div>
            <div className="form-field">
              <label className="form-label">City</label>
              <input type="text" name="city" className="form-input" placeholder="New York" onChange={handleChange} />
            </div>
            <div className="form-field">
              <label className="form-label">Country</label>
              <input type="text" name="country" className="form-input" placeholder="USA" onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="section-title">Additional Details</div>
          <div className="form-grid" style={{gridTemplateColumns:'1fr'}}>
            <div className="form-field">
              <label className="form-label">Notes</label>
              <textarea name="notes" className="form-textarea" placeholder="Add any additional notes..." onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button className="btn-primary">✓ Add Client</button>
          <button className="btn-secondary">⌫ Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddClient;