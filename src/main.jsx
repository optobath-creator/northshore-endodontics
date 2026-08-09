import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Clock3, Menu, Phone, ShieldCheck, Stethoscope, X } from 'lucide-react'
import './styles.css'

const services = [
  ['01', 'Root canal therapy', 'Relieve pain and preserve your natural tooth with precise, comfortable treatment.'],
  ['02', 'Retreatment', 'A careful second look for teeth that need additional endodontic attention.'],
  ['03', 'Microsurgery', 'Advanced surgical care when a non-surgical approach is not enough.'],
  ['04', 'Cracked teeth & trauma', 'Prompt evaluation and a clear plan for urgent dental injuries.'],
]
const nav = [['Our doctors', '#doctors'], ['Services', '#services'], ['Your visit', '#visit'], ['Contact', '#contact']]

function ContactLink({ children = 'Contact us now' }) { return <a className="btn dark" href="#contact">{children} <ArrowRight size={17} /></a> }

function App() {
  const [menu, setMenu] = useState(false)
  const close = () => setMenu(false)
  return <div className="site">
    <div className="top"><div className="container top-in"><span>Northbrook's dedicated endodontic practice</span><a href="tel:8474801578"><Phone size={14} /> (847) 480-1578</a></div></div>
    <header><div className="container head-in"><a className="brand" href="#top" onClick={close} aria-label="North Shore Endodontics home"><i>NS</i><span><strong>North Shore</strong><small>ENDODONTICS</small></span></a><nav className={menu ? 'open' : ''}>{nav.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={close}>Contact us now <ArrowRight size={16} /></a></nav><button className="menu" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label={menu ? 'Close navigation' : 'Open navigation'}>{menu ? <X /> : <Menu />}</button></div></header>
    <main id="top">
      <section className="hero"><div className="container hero-in"><div><p className="eyebrow light">Specialized care. Lasting confidence.</p><h1>Keep your natural smile <em>healthy.</em></h1><p className="lead">Expert endodontic care with a calm, personal approach—so you can get back to the moments that make you smile.</p><div className="actions"><a className="btn white" href="#contact">Contact us now <ArrowRight size={17} /></a><a href="#services" className="link light">Explore our services <ArrowRight size={16} /></a></div><div className="note"><ShieldCheck size={18} /> Proudly serving Northbrook and the North Shore</div></div><aside><small>A thoughtful next step</small><p>“You deserve to understand your care and feel comfortable with the plan.”</p><b /></aside></div></section>
      <section className="trust"><div className="container trust-in"><div><b>40+</b><span>years of combined<br />experience</span></div><div><b>01</b><span>specialty practice<br />for your comfort</span></div><div><b>100%</b><span>focused on saving<br />natural teeth</span></div><a href="#contact">Talk with our team <ArrowRight size={17} /></a></div></section>
      <section className="section container intro"><small className="eyebrow">A better endodontic experience</small><div><h2>Specialized care, delivered with <em>clarity.</em></h2><div><p>At North Shore Endodontics, we combine advanced technology with the kind of personal attention that makes a difference. From your first call to your final follow-up, you’ll know what to expect.</p><a className="link" href="#visit">What to expect <ArrowRight size={16} /></a></div></div></section>
      <section className="section services" id="services"><div className="container"><div className="heading"><div><small className="eyebrow">How we can help</small><h2>Focused treatment for<br /><em>complex problems.</em></h2></div><p>We treat the inside of the tooth, helping you preserve your natural smile with precise, conservative care.</p></div><div className="service-grid">{services.map(([number, title, text]) => <article key={title}><span>{number}</span><Stethoscope size={22} /><h3>{title}</h3><p>{text}</p><a href="#contact">Learn more <ArrowRight size={15} /></a></article>)}</div></div></section>
      <section className="section container doctors" id="doctors"><div><small className="eyebrow">Meet your doctors</small><h2>Experience you can <em>feel.</em></h2><p>Our doctors bring expertise, patience, and a shared belief that the best care starts with listening.</p><a className="link" href="#contact">Meet the team <ArrowRight size={16} /></a></div><div className="doctor-grid"><article className="doc one"><div><small>Endodontist</small><h3>Dr. David<br />Rosenbaum</h3><p>Trusted specialty care with decades of experience.</p></div></article><article className="doc two"><div><small>Endodontist</small><h3>Dr. Carl<br />Rex</h3><p>Modern treatment with a thoughtful approach.</p></div></article></div></section>
      <section className="section visit" id="visit"><div className="container visit-in"><div><small className="eyebrow">Start your visit</small><h2>Clear answers.<br /><em>Comfortable care.</em></h2><p>Call our office directly and our team will help you understand the next step for your care.</p><ContactLink /></div><div className="steps">{[['01', 'Call our office', 'Speak with our team during office hours.'], ['02', 'Get clear guidance', 'We’ll answer your questions and explain what to expect.'], ['03', 'Feel confident moving forward', 'You’ll have a clear plan for your next visit.']].map(([number, title, text]) => <div key={number}><b>{number}</b><span><strong>{title}</strong><small>{text}</small></span></div>)}</div></div></section>
      <section className="section contact" id="contact"><div className="container contact-in"><div><small className="eyebrow">Contact us now</small><h2>Let’s get you<br /><em>feeling better.</em></h2><p>Call our Northbrook office directly. We’ll be glad to answer your questions and help you understand the next step.</p><div className="details"><a href="tel:8474801578"><Phone size={18} /> (847) 480-1578</a><span><Clock3 size={18} /> Mon–Thu, 8:00am–5:00pm</span></div></div><div className="address"><small>Visit our office</small><p>1500 Shermer Rd #300<br />Northbrook, IL 60062</p><a className="link light" href="https://maps.google.com/?q=1500+Shermer+Rd+Northbrook+IL+60062" target="_blank" rel="noreferrer">Get directions <ArrowRight size={16} /></a></div></div></section>
    </main>
    <footer><div className="container foot"><a className="brand" href="#top"><i>NS</i><span><strong>North Shore</strong><small>ENDODONTICS</small></span></a><span>© 2026 North Shore Endodontics</span><a href="#contact">Privacy & accessibility</a></div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
