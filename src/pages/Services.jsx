import React from 'react'

const Services = () => {
  const services = [
    { title: 'Web Development', desc: 'Modern, responsive websites built to your specifications.' },
    { title: 'UI/UX Design', desc: 'Creative and user-friendly interfaces with attention to detail.' },
    { title: 'Consulting', desc: 'Expert advice to help you grow and streamline your business.' },
  ]

  return (
    <div className="services-page">
      <style>{`
        .services-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#050507;color:#e6eef8;position:relative;overflow:hidden;font-family:Inter,ui-sans-serif,system-ui,Arial}
        .bg-shade{position:absolute;inset:0;background:radial-gradient(ellipse at center, rgba(20,20,25,0.6), rgba(2,2,6,0.95));pointer-events:none}
        .orbs{position:absolute;inset:0;mix-blend-mode:screen;opacity:0.35}
        .orb{position:absolute;border-radius:50%;filter:blur(40px);opacity:0.9;transform:translate3d(0,0,0);animation:float 8s ease-in-out infinite}
        .orb.a{width:360px;height:360px;background:linear-gradient(135deg,#0ff,#6b6bff);left:-80px;top:-60px}
        .orb.b{width:260px;height:260px;background:linear-gradient(135deg,#ff6bd6,#6be3ff);right:-70px;bottom:-80px;animation-duration:10s}
        @keyframes float{0%{transform:translateY(0) scale(1)}50%{transform:translateY(-18px) scale(1.03)}100%{transform:translateY(0) scale(1)}}

        .card{position:relative;z-index:2;width:920px;max-width:94%;padding:34px;border-radius:14px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));box-shadow:0 10px 30px rgba(2,2,6,0.7), inset 0 1px 0 rgba(255,255,255,0.02);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,0.04);display:grid;gap:24px}

        .header{font-size:32px;font-weight:700;letter-spacing:0.3px;color:#fff;text-align:center}

        .service-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;margin-top:16px}
        .service-item{padding:20px;border-radius:12px;background:rgba(255,255,255,0.015);border:1px solid rgba(255,255,255,0.03);transition:transform 0.25s, box-shadow 0.25s;cursor:default}
        .service-item:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,0.45)}
        .service-title{font-size:20px;font-weight:600;margin-bottom:6px}
        .service-desc{color:rgba(230,238,248,0.75);line-height:1.4}

        @media (max-width:780px){.card{padding:24px}}
      `}</style>

      <div className="bg-shade" />
      <div className="orbs" aria-hidden>
        <div className="orb a" />
        <div className="orb b" />
      </div>

      <div className="card" role="main" aria-label="Our services">
        <div className="header">What We Offer</div>
        <div className="service-list">
          {services.map((s, idx) => (
            <div key={idx} className="service-item">
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
