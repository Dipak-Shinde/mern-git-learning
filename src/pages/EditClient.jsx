import React, { useState } from "react";

const EditClient = () => {
  const [formData, setFormData] = useState({
    firstName: "Raj",
    lastName: "Kumar",
    gender: "Male",
    birthdate: "10-07-1982",
    contact: "7654323423",
    email: "raj.kumar23@gmail.com",
    addressLine1: "Aundh-Sangavi Road",
    addressLine2: "2nd Floor",
    country: "India",
    state: "Maharashtra",
    city: "Pune",
    pin: "411007"
  });
  
  const [status, setStatus] = useState("idle");
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSave = () => {
    setStatus("saving");
    setTimeout(() => {
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2000);
    }, 800);
  };
  
  return (
    <div className="edit-client-page">
      <style>{`
        .edit-client-page {
          background: #050507;
          color: #e6eef8;
          padding: 2.5rem;
          font-family: Inter, ui-sans-serif, system-ui, Arial;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
        }
        
        .btn-back {
          padding: 10px 20px;
          border-radius: 10px;
          border: 1px solid rgba(108, 167, 255, 0.3);
          background: rgba(6, 182, 212, 0.08);
          color: #9cecff;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s;
        }
        
        .btn-back:hover {
          background: rgba(6, 182, 212, 0.15);
          transform: translateY(-2px);
        }
        
        .section {
          margin-bottom: 2.5rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }
        
        .section:last-of-type {
          border-bottom: none;
        }
        
        .section-title {
          font-size: 18px;
          font-weight: 700;
          color: #bfe9ff;
          margin-bottom: 1.75rem;
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.75rem;
        }
        
        .form-group {
          position: relative;
        }
        
        .form-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.01);
          color: #e6eef8;
          font-size: 14px;
          outline: none;
          transition: all 0.25s;
          font-family: inherit;
        }
        
        .form-input:focus {
          border-color: rgba(108, 167, 255, 0.6);
          box-shadow: 0 6px 22px rgba(11, 120, 255, 0.08);
          transform: translateY(-2px);
        }
        
        .form-input::placeholder {
          color: transparent;
        }
        
        .form-label {
          position: absolute;
          left: 14px;
          top: 12px;
          color: rgba(230, 238, 248, 0.6);
          font-size: 14px;
          font-weight: 500;
          pointer-events: none;
          transition: all 0.25s;
          background: #050507;
          padding: 0 4px;
        }
        
        .form-input:focus + .form-label,
        .form-input:not(:placeholder-shown) + .form-label {
          transform: translateY(-24px);
          font-size: 12px;
          color: #06b6d4;
        }
        
        .actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }
        
        .btn-primary {
          padding: 12px 28px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(90deg, #06b6d4, #7c3aed);
          color: #031025;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 30px rgba(124, 58, 237, 0.12);
          transition: all 0.25s;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
        }
        
        .btn-primary.saving {
          opacity: 0.85;
        }
        
        .btn-secondary {
          padding: 12px 28px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: transparent;
          color: rgba(230, 238, 248, 0.85);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s;
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.03);
          transform: translateY(-2px);
        }
        
        .status-message {
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          padding: 1rem 1.5rem;
          border-radius: 10px;
          background: linear-gradient(90deg, #17d0b8, #6be3ff);
          color: #021018;
          font-weight: 700;
          font-size: 14px;
          animation: slideIn 0.4s;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
      
      {status === "saved" && <div className="status-message">✓ Saved successfully</div>}
      
      <div className="page-header">
        <h1 className="page-title">Edit Client</h1>
        <button className="btn-back">← Back</button>
      </div>
      
      <section className="section">
        <h2 className="section-title">Personal Details</h2>
        <div className="form-grid">
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input"
              placeholder="First Name"
            />
            <label className="form-label">First Name</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
              placeholder="Last Name"
            />
            <label className="form-label">Last Name</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-input"
              placeholder="Gender"
            />
            <label className="form-label">Gender</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className="form-input"
              placeholder="Birthdate"
            />
            <label className="form-label">Birthdate</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="form-input"
              placeholder="Contact"
            />
            <label className="form-label">Contact</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Email"
            />
            <label className="form-label">Email</label>
          </div>
        </div>
      </section>
      
      <section className="section">
        <h2 className="section-title">Address Details</h2>
        <div className="form-grid">
          <div className="form-group">
            <input
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              className="form-input"
              placeholder="Address Line 1"
            />
            <label className="form-label">Address Line 1</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              className="form-input"
              placeholder="Address Line 2"
            />
            <label className="form-label">Address Line 2</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="form-input"
              placeholder="Country"
            />
            <label className="form-label">Country</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="form-input"
              placeholder="State"
            />
            <label className="form-label">State</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form-input"
              placeholder="City"
            />
            <label className="form-label">City</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              className="form-input"
              placeholder="Pin"
            />
            <label className="form-label">Pin</label>
          </div>
        </div>
      </section>
      
      <div className="actions">
        <button className="btn-secondary">⌫ Cancel</button>
        <button className={`btn-primary ${status === "saving" ? "saving" : ""}`} onClick={handleSave}>
          {status === "saving" ? "Saving..." : "✓ Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default EditClient;