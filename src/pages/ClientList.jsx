import React, { useState } from "react";

const ClientList = () => {
  const [clients] = useState([
    { id: 1, name: 'Raj Kumar', email: 'raj.kumar@gmail.com', phone: '7654323423', city: 'Pune', dob: '10 Jul 1982', gender: 'Male' },
    { id: 2, name: 'Priya Singh', email: 'priya.singh@gmail.com', phone: '8765432134', city: 'Mumbai', dob: '22 Mar 1990', gender: 'Female' },
  ])
  return (
    <div>
      <style>{`
        .client-list-page{font-family:Inter,ui-sans-serif,system-ui,Arial;color:#e6eef8}
        .page-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:28px;gap:16px}
        .page-title{font-size:28px;font-weight:700;color:#fff}
        .controls{display:flex;gap:12px;flex-wrap:wrap}
        .search-box{display:flex;align-items:center;gap:8px;padding:10px 16px;border-radius:10px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.01);flex:1;min-width:200px}
        .search-box input{background:transparent;border:none;color:inherit;outline:none;width:100%;font-size:14px}
        .btn-primary{padding:10px 18px;border-radius:10px;border:0;cursor:pointer;background:linear-gradient(90deg,#06b6d4,#7c3aed);color:#031025;font-weight:700;transition:transform 0.18s}
        .btn-primary:hover{transform:translateY(-2px)}
        .table-wrapper{overflow-x:auto;border-radius:12px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.01)}
        table{width:100%;border-collapse:collapse;font-size:14px}
        thead{background:linear-gradient(90deg,rgba(11,120,255,0.1),rgba(124,58,237,0.1));border-bottom:1px solid rgba(108,167,255,0.2)}
        th{padding:14px 16px;text-align:left;font-weight:600;color:#bfe9ff;text-transform:uppercase;font-size:12px}
        td{padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.03)}
        tbody tr:hover{background:rgba(11,120,255,0.05)}
        .action-buttons{display:flex;gap:8px}
        .btn-icon{width:36px;height:36px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.18s}
        .btn-icon:hover{background:rgba(11,120,255,0.1);border-color:rgba(108,167,255,0.4)}
      `}</style>
      <div className="client-list-page">
        <div className="page-header">
          <div className="page-title">👥 Client List</div>
          <div className="controls">
            <div className="search-box"><span>🔍</span><input type="text" placeholder="Search clients..." /></div>

            <button className="btn-primary">+ Add Client</button>
          </div>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>Name</th><th>Email</th><th>Phone</th><th>City</th><th>DOB</th><th>Gender</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td><strong>{client.name}</strong></td>
                  <td style={{color:'#9cecff'}}>{client.email}</td>
                  <td>{client.phone}</td><td>{client.city}</td><td>{client.dob}</td><td>{client.gender}</td>
                  <td><div className="action-buttons"><button className="btn-icon">👁️</button><button className="btn-icon">✏️</button><button className="btn-icon">🗑️</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientList;