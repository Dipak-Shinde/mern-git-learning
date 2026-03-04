import React, { useState, useRef, useEffect } from 'react'

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const formRef = useRef(null)

  useEffect(() => {
    if (status === 'sent') {
      const t = setTimeout(() => setStatus('idle'), 3500)
      return () => clearTimeout(t)
    }
  }, [status])

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 1800)
      return
    }
    setStatus('sending')
    // simulate send
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      if (formRef.current) formRef.current.reset()
    }, 1400)
  }

  return (
    <div className="contact-page">
      <style>{`
        .contact-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#050507;color:#e6eef8;position:relative;overflow:hidden;font-family:Inter,ui-sans-serif,system-ui,Arial}
        .bg-shade{position:absolute;inset:0;background:radial-gradient(ellipse at center, rgba(20,20,25,0.6), rgba(2,2,6,0.95));pointer-events:none}
        .orbs{position:absolute;inset:0;mix-blend-mode:screen;opacity:0.35}
        .orb{position:absolute;border-radius:50%;filter:blur(40px);opacity:0.9;transform:translate3d(0,0,0);animation:float 8s ease-in-out infinite}
        .orb.a{width:360px;height:360px;background:linear-gradient(135deg,#0ff,#6b6bff);left:-80px;top:-60px}
        .orb.b{width:260px;height:260px;background:linear-gradient(135deg,#ff6bd6,#6be3ff);right:-70px;bottom:-80px;animation-duration:10s}
        @keyframes float{0%{transform:translateY(0) scale(1)}50%{transform:translateY(-18px) scale(1.03)}100%{transform:translateY(0) scale(1)}}

        .card{position:relative;z-index:2;width:920px;max-width:94%;display:grid;grid-template-columns:1fr 1fr;gap:28px;padding:34px;border-radius:14px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));box-shadow:0 10px 30px rgba(2,2,6,0.7), inset 0 1px 0 rgba(255,255,255,0.02);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,0.04)}

        .left{padding:10px 18px;display:flex;flex-direction:column;justify-content:center}
        .title{font-size:28px;font-weight:700;margin-bottom:8px;letter-spacing:0.2px;color:#ffffff}
        .desc{color:rgba(230,238,248,0.75);line-height:1.5;margin-bottom:18px}

        .contact-list{display:flex;flex-direction:column;gap:10px;margin-top:8px}
        .contact-item{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:10px;background:linear-gradient(90deg, rgba(255,255,255,0.01), rgba(255,255,255,0.006));border:1px solid rgba(255,255,255,0.03)}
        .icon{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.02);color:#9cecff}

        form{display:flex;flex-direction:column;gap:14px;padding:6px 8px}
        .field{position:relative}
        input,.textarea{width:100%;padding:14px 14px;border-radius:10px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.01);color:inherit;outline:none;transition:box-shadow .25s, transform .18s, border-color .18s}
        input:focus, .textarea:focus{box-shadow:0 6px 22px rgba(11,120,255,0.06);border-color:rgba(108,167,255,0.6);transform:translateY(-2px)}
        .label{position:absolute;left:14px;top:12px;pointer-events:none;color:rgba(230,238,248,0.6);transition:transform .18s, font-size .18s, top .18s}
        input:focus + .label, textarea:focus + .label, input:not(:placeholder-shown) + .label, textarea:not(:placeholder-shown) + .label{transform:translateY(-22px);font-size:12px;color:#bfe9ff}

        .actions{display:flex;gap:12px;align-items:center;margin-top:6px}
        .btn{padding:12px 18px;border-radius:10px;border:0;cursor:pointer;background:linear-gradient(90deg,#06b6d4,#7c3aed);color:#031025;font-weight:700;box-shadow:0 8px 30px rgba(124,58,237,0.12);transition:transform .18s, box-shadow .18s}
        .btn:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(0,0,0,0.45)}
        .btn:active{transform:translateY(-1px)}

        .ghost{padding:10px 12px;border-radius:10px;background:transparent;border:1px solid rgba(255,255,255,0.04);color:rgba(230,238,248,0.85)}

        .status{font-size:13px;color:rgba(180,240,255,0.9);margin-left:8px}

        .sending .btn{opacity:0.85;transform:scale(.98)}
        .sent-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:999px;background:linear-gradient(90deg,#17d0b8,#6be3ff);color:#021018;font-weight:700;transform:scale(.95);animation:pop .5s ease}
        @keyframes pop{0%{transform:scale(.6);opacity:0}70%{transform:scale(1.06)}100%{transform:scale(1)}}

        @media (max-width:780px){.card{grid-template-columns:1fr;padding:20px}.left{order:2}.contact-form{order:1}}
      `}</style>

      <div className="bg-shade" />
      <div className="orbs" aria-hidden>
        <div className="orb a" />
        <div className="orb b" />
      </div>

      <div className="card" role="region" aria-label="Contact form">
        <div className="left">
          <div className="title">Get in touch</div>
          <div className="desc">We'd love to hear from you — whether it's feedback, questions or a project idea. Drop a line and we'll respond shortly.</div>

          <div className="contact-list">
            <div className="contact-item">
              <div className="icon">📧</div>
              <div>
                <div style={{fontWeight:700}}>Email</div>
                <div style={{color:'rgba(230,238,248,0.65)'}}>hello@company.com</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">📞</div>
              <div>
                <div style={{fontWeight:700}}>Phone</div>
                <div style={{color:'rgba(230,238,248,0.65)'}}>+1 555 123 4567</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`contact-form ${status==='sending' ? 'sending' : ''}`}>
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="field">
              <input name="name" placeholder=" " onChange={handleChange} />
              <label className="label">Your name</label>
            </div>

            <div className="field">
              <input name="email" type="email" placeholder=" " onChange={handleChange} />
              <label className="label">Email address</label>
            </div>

            <div className="field">
              <textarea name="message" className="textarea" rows="5" placeholder=" " onChange={handleChange} />
              <label className="label">Message</label>
            </div>

            <div className="actions">
              <button type="submit" className="btn">
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent' : 'Send message'}
              </button>

              <button type="button" className="ghost" onClick={() => { setForm({ name: '', email: '', message: '' }); if (formRef.current) formRef.current.reset(); setStatus('idle') }}>Reset</button>

              <div className="status">
                {status === 'error' && 'Please fill out all fields.'}
                {status === 'sent' && <span className="sent-badge">✓ Message sent</span>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs