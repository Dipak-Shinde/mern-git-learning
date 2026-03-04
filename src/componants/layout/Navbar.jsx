import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ onToggle }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  
  return (
    <>
      <style>{`
        .navbar {
          height: 60px;
          background: linear-gradient(180deg, rgba(13, 13, 22, 0.95), rgba(5, 5, 7, 0.98));
          color: #e6eef8;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(8px);
        }
        
        .navbar-left {
          display: flex;
          align-items: center;
          gap: 24px;
          flex: 1;
        }
        
        .navbar .menu-toggle {
          display: none;
          cursor: pointer;
          font-size: 24px;
          color: #e6eef8;
          background: transparent;
          border: none;
          transition: all 0.25s;
          padding: 6px 12px;
          border-radius: 8px;
        }
        
        .navbar .menu-toggle:hover {
          color: #06b6d4;
          background: rgba(6, 182, 212, 0.08);
        }
        
        .navbar .brand {
          font-size: 16px;
          font-weight: 700;
          background: linear-gradient(90deg, #06b6d4, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          white-space: nowrap;
        }
        
        .navbar-center {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        
        .navbar .nav-links {
          display: flex;
          gap: 4px;
          align-items: center;
        }
        
        .navbar .nav-item {
          color: rgba(230, 238, 248, 0.75);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.25s;
          border: 1px solid transparent;
          font-weight: 500;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .navbar .nav-item:hover {
          color: #06b6d4;
          background: rgba(6, 182, 212, 0.08);
          border-color: rgba(6, 182, 212, 0.2);
          transform: translateY(-2px);
        }
        
        .navbar .nav-item.active {
          background: rgba(6, 182, 212, 0.12);
          color: #06b6d4;
          border-color: rgba(6, 182, 212, 0.4);
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(6, 182, 212, 0.1);
        }
        
        .navbar-right {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
          justify-content: flex-end;
        }
        
        .navbar-search {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          padding: 6px 12px;
          transition: all 0.25s;
        }
        
        .navbar-search:hover,
        .navbar-search.active {
          background: rgba(6, 182, 212, 0.08);
          border-color: rgba(6, 182, 212, 0.3);
        }
        
        .navbar-search input {
          background: transparent;
          border: none;
          color: #e6eef8;
          outline: none;
          font-size: 13px;
          width: 150px;
        }
        
        .navbar-search input::placeholder {
          color: rgba(230, 238, 248, 0.4);
        }
        
        .navbar-search-icon {
          color: rgba(230, 238, 248, 0.6);
          font-size: 16px;
        }
        
        .navbar-icons {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .navbar-icon-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: rgba(230, 238, 248, 0.7);
          width: 36px;
          height: 36px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          transition: all 0.25s;
        }
        
        .navbar-icon-btn:hover {
          background: rgba(6, 182, 212, 0.08);
          color: #06b6d4;
          border-color: rgba(6, 182, 212, 0.3);
        }
        
        .navbar .user {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          transition: all 0.25s;
          cursor: pointer;
        }
        
        .navbar .user:hover {
          background: rgba(6, 182, 212, 0.08);
          border-color: rgba(6, 182, 212, 0.2);
        }
        
        .navbar .user .name {
          font-size: 13px;
          font-weight: 500;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        
        .navbar .user .name .label {
          font-size: 11px;
          color: rgba(230, 238, 248, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        
        .navbar .user .avatar {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(135deg, #06b6d4, #7c3aed);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #031025;
          font-weight: 700;
        }
        
        .navbar-divider {
          width: 1px;
          height: 24px;
          background: rgba(255, 255, 255, 0.06);
          display: none;
        }
        
        @media (max-width: 1024px) {
          .navbar {
            padding: 0 16px;
          }
          
          .navbar-search input {
            width: 100px;
          }
          
          .navbar .user .name .label {
            display: none;
          }
        }
        
        @media (max-width: 800px) {
          .navbar {
            padding: 0 12px;
          }
          
          .navbar .menu-toggle {
            display: flex;
          }
          
          .navbar .nav-links {
            display: none;
          }
          
          .navbar-search {
            display: none;
          }
          
          .navbar-search.active {
            display: flex;
          }
          
          .navbar-center {
            display: none;
          }
          
          .navbar .brand {
            font-size: 14px;
          }
          
          .navbar-divider {
            display: block;
          }
        }
      `}</style>

      <header className="navbar">
        <div className="navbar-left">
          <button className="menu-toggle" onClick={onToggle}>☰</button>
          <div className="brand">MyApp</div>
        </div>
        
        <div className="navbar-center">
          <nav className="nav-links">
            <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              📧 Contact
            </NavLink>
            <NavLink to="/services" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              💼 Services
            </NavLink>
          </nav>
        </div>
        
        <div className="navbar-right">
          <div className={`navbar-search ${isSearchOpen ? 'active' : ''}`}>
            <span className="navbar-search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search..." 
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => setIsSearchOpen(false)}
            />
          </div>
          
          <div className="navbar-icons">
            <button className="navbar-icon-btn" title="Notifications">🔔</button>
            <button className="navbar-icon-btn" title="Settings">⚙️</button>
          </div>
          
          <div className="navbar-divider" />
          
          <div className="user">
            <div className="avatar">R</div>
            <div className="name">
              <span className="label">User</span>
              <span>Raj Kumar</span>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar