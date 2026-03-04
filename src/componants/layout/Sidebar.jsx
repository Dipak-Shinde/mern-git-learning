import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav className="sidebar" id="sidebar">
      <style>{`
        .sidebar {
          width: 220px;
          background: linear-gradient(180deg, rgba(5,5,7,0.95), rgba(5,5,7,0.98));
          border-right: 1px solid rgba(255, 255, 255, 0.04);
          padding: 2rem 0;
          position: fixed;
          left: 0;
          top: 60px;
          height: calc(100vh - 60px);
          overflow-y: auto;
          z-index: 40;
          backdrop-filter: blur(8px);
        }
        
        .sidebar .logo {
          font-size: 18px;
          font-weight: 700;
          color: #06b6d4;
          padding: 0 1.5rem;
          margin-bottom: 2.5rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        
        .nav-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 0 1rem;
        }
        
        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 10px;
          color: rgba(230, 238, 248, 0.75);
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          transition: all 0.25s;
          border: 1px solid transparent;
          cursor: pointer;
        }
        
        .nav-link:hover {
          color: #06b6d4;
          background: rgba(6, 182, 212, 0.08);
          border-color: rgba(6, 182, 212, 0.2);
          transform: translateX(4px);
        }
        
        .nav-link.active {
          background: rgba(6, 182, 212, 0.12);
          color: #06b6d4;
          font-weight: 600;
          border-color: rgba(6, 182, 212, 0.4);
          box-shadow: 0 4px 12px rgba(6, 182, 212, 0.1);
        }
        
        .nav-link.active::before {
          content: '';
          position: absolute;
          left: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, #06b6d4, #9cecff);
          border-radius: 0 3px 3px 0;
        }
        
        .nav-link {
          position: relative;
        }
        
        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-100%);
            transition: transform 0.3s;
            box-shadow: 2px 0 12px rgba(0, 0, 0, 0.5);
          }
          
          .sidebar.active {
            transform: translateX(0);
          }
        }
        
        .sidebar::-webkit-scrollbar {
          width: 6px;
        }
        
        .sidebar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .sidebar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 3px;
        }
        
        .sidebar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }
      `}</style>
      
      <div className="logo">📁 Menu</div>
      <div className="nav-items">
        <NavLink to="/addClient" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>
          ➕ Add Client
        </NavLink>
        <NavLink to="/clientList" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>
          📋 Client List
        </NavLink>
        <NavLink to="/editClient" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>
          ✏️ Edit Client
        </NavLink>
        <NavLink to="/git" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>
          🔗 Git Logs
        </NavLink>
      </div>
    </nav>
  )
}

export default Sidebar