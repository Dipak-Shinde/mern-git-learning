import React, { useState } from "react";

const ViewClientDetails = () => {
  const [selectedCommit, setSelectedCommit] = useState(null);
  
  const clientData = {
    name: "Raj Kumar",
    email: "raj.kumar23@gmail.com",
    phone: "7654323423",
    gender: "Male",
    dob: "10 Jul 1982",
    address: "Aundh-Sangavi Road, 2nd Floor, Pune, Maharashtra, India, 411007"
  };
  
  const caseData = {
    title: "Criminal Defense",
    type: "Criminal Case",
    court: "Sessions Court Delhi",
    location: "Delhi",
    adverseParty: "Ravi Singh",
    advocate: "Kumar Joshi",
    startDate: "1 Sep 2024",
    endDate: "1 Mar 2025",
    description: "Defense case for Raj Kumar accused of embezzlement."
  };
  
  const documents = [
    { id: 1, name: "Criminal Defense Brief", date: "2024-08-15" },
    { id: 2, name: "Evidence Collection Report", date: "2024-08-20" },
    { id: 3, name: "Court Hearing Notes", date: "2024-09-01" }
  ];
  
  const notes = [
    { id: 1, date: "2024-08-03", title: "Criminal Defense Strategy Session" },
    { id: 2, date: "2024-08-10", title: "Evidence Review with Advocate" },
    { id: 3, date: "2024-08-25", title: "Court Preparation Meeting" }
  ];
  
  return (
    <div className="view-client-page">
      <style>{`
        .view-client-page {
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
          margin-bottom: 2.5rem;
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
        
        .card-section {
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 14px;
          padding: 2rem;
          margin-bottom: 2rem;
          backdrop-filter: blur(6px);
        }
        
        .section-title {
          font-size: 18px;
          font-weight: 700;
          color: #bfe9ff;
          margin-bottom: 1.5rem;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .info-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .info-label {
          font-size: 12px;
          font-weight: 700;
          color: #06b6d4;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .info-value {
          font-size: 15px;
          color: #e6eef8;
          line-height: 1.5;
        }
        
        .table-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        
        .table-section {
          display: flex;
          flex-direction: column;
        }
        
        .table-title {
          font-size: 16px;
          font-weight: 700;
          color: #bfe9ff;
          margin-bottom: 1rem;
        }
        
        .table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 10px;
          overflow: hidden;
        }
        
        .table thead {
          background: linear-gradient(90deg, rgba(11,120,255,0.1), rgba(124,58,237,0.1));
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        
        .table th {
          padding: 12px 16px;
          text-align: left;
          font-size: 12px;
          font-weight: 700;
          color: #06b6d4;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .table td {
          padding: 12px 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.02);
          font-size: 14px;
          color: #e6eef8;
        }
        
        .table tbody tr {
          transition: all 0.2s;
        }
        
        .table tbody tr:hover {
          background: rgba(11, 120, 255, 0.05);
        }
        
        .doc-link {
          color: #06b6d4;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s;
          font-weight: 500;
        }
        
        .doc-link:hover {
          color: #9cecff;
          text-decoration: underline;
        }
        
        .date-badge {
          font-size: 12px;
          color: rgba(230, 238, 248, 0.7);
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .table-container {
            grid-template-columns: 1fr;
          }
          
          .info-grid {
            grid-template-columns: 1fr;
          }
          
          .page-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
      
      <div className="page-header">
        <h1 className="page-title">Client Details</h1>
        <button className="btn-back">← Back</button>
      </div>
      
      <div className="card-section">
        <h2 className="section-title">Personal Information</h2>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Full Name</span>
            <span className="info-value">{clientData.name}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email Address</span>
            <span className="info-value">{clientData.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Phone Number</span>
            <span className="info-value">{clientData.phone}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Gender</span>
            <span className="info-value">{clientData.gender}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Date of Birth</span>
            <span className="info-value">{clientData.dob}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Full Address</span>
            <span className="info-value">{clientData.address}</span>
          </div>
        </div>
      </div>
      
      <div className="card-section">
        <h2 className="section-title">Case Information</h2>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Case Title</span>
            <span className="info-value">{caseData.title}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Case Type</span>
            <span className="info-value">{caseData.type}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Court Name</span>
            <span className="info-value">{caseData.court}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Court Location</span>
            <span className="info-value">{caseData.location}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Adverse Party</span>
            <span className="info-value">{caseData.adverseParty}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Advocate Name</span>
            <span className="info-value">{caseData.advocate}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Start Date</span>
            <span className="info-value">{caseData.startDate}</span>
          </div>
          <div className="info-item">
            <span className="info-label">End Date</span>
            <span className="info-value">{caseData.endDate}</span>
          </div>
          <div className="info-item" style={{ gridColumn: "1 / -1" }}>
            <span className="info-label">Case Description</span>
            <span className="info-value">{caseData.description}</span>
          </div>
        </div>
      </div>
      
      <div className="table-container">
        <div className="table-section">
          <h3 className="table-title">📄 Documents</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Date Uploaded</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td><a className="doc-link">{doc.name}</a></td>
                  <td><span className="date-badge">{doc.date}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="table-section">
          <h3 className="table-title">📝 Notes</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Note Date</th>
                <th>Note Title</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note) => (
                <tr key={note.id}>
                  <td><span className="date-badge">{note.date}</span></td>
                  <td>{note.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewClientDetails;