import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <style>{`
        .dashboard-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          font-family: Inter, ui-sans-serif, system-ui, Arial;
          position: relative;
          overflow: hidden;
          color: #e6eef8;
          background: #050507;
          padding-top: 60px;
        }
        
        .bg-shade {
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(20,20,25,0.6), rgba(2,2,6,0.95));
          pointer-events: none;
          z-index: 0;
        }
        
        .orbs {
          position: fixed;
          inset: 0;
          mix-blend-mode: screen;
          opacity: 0.35;
          z-index: 0;
        }
        
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.9;
          transform: translate3d(0,0,0);
          animation: float 8s ease-in-out infinite;
        }
        
        .orb.a {
          width: 360px;
          height: 360px;
          background: linear-gradient(135deg, #0ff, #6b6bff);
          left: -80px;
          top: -60px;
        }
        
        .orb.b {
          width: 260px;
          height: 260px;
          background: linear-gradient(135deg, #ff6bd6, #6be3ff);
          right: -70px;
          bottom: -80px;
          animation-duration: 10s;
        }
        
        @keyframes float {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-18px) scale(1.03); }
          100% { transform: translateY(0) scale(1); }
        }
        
        .layout-wrapper {
          display: flex;
          flex: 1;
          position: relative;
          z-index: 1;
          height: calc(100vh - 60px);
        }
        
        .sidebar {
          width: 220px;
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          overflow-y: auto;
          z-index: 40;
        }
        
        .content {
          flex: 1;
          margin-left: 220px;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 28px 32px;
          background: linear-gradient(180deg, rgba(5,5,7,0.5), rgba(5,5,7,0.8));
        }
        
        .card-wrapper {
          max-width: 100%;
          margin: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.04);
          background-color: transparent;
        }
        
        @media (max-width: 800px) {
          .sidebar {
            position: absolute;
            left: -220px;
            top: 0;
            bottom: 0;
            transition: left 0.25s;
            z-index: 100;
          }
          
          .sidebar.open {
            left: 0;
          }
          
          .content {
            margin-left: 0;
            width: 100%;
            padding: 20px 16px;
          }
          
          .card-wrapper {
            padding: 24px;
            border-radius: 12px;
          }
          
          .navbar .menu-toggle {
            display: block;
          }
        }
        
        @media (max-width: 600px) {
          .content {
            padding: 16px 12px;
          }
          
          .card-wrapper {
            padding: 18px;
            border-radius: 10px;
          }
        }
        
        .navbar .menu-toggle {
          display: none;
          cursor: pointer;
          font-size: 24px;
        }
        
        .content::-webkit-scrollbar {
          width: 8px;
        }
        
        .content::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .content::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 4px;
        }
        
        .content::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }
      `}</style>

      <div className="bg-shade" />
      <div className="orbs" aria-hidden>
        <div className="orb a" />
        <div className="orb b" />
      </div>
      
      <Navbar onToggle={() => {
        const sb = document.getElementById('sidebar');
        if (sb) sb.classList.toggle('open');
      }} />
      
      <div className="layout-wrapper">
        <Sidebar />
        <section className="content">
          <div className="card-wrapper">
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  )
}

export default DashboardLayout
