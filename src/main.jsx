import { StrictMode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Clock3, Phone, ShieldCheck, Stethoscope } from 'lucide-react'
import './styles.css'

const services = [
  ['01', 'Root canal therapy', 'When the inside of a tooth is inflamed or infected, treatment can relieve pain and help preserve your natural tooth.', 'Most common treatment'],
  ['02', 'Retreatment', 'A careful second look for a tooth that needs additional endodontic attention after previous treatment.', 'A second chance to heal'],
  ['03', 'Microsurgery', 'Precise surgical care when a non-surgical approach cannot fully resolve the problem.', 'Targeted surgical care'],
  ['04', 'Cracked teeth & trauma', 'Prompt evaluation and a clear plan for sudden pain, a cracked tooth, or a dental injury.', 'Call us promptly'],
]

function App() {
  const heroRef = useRef(null)
  const [showStickyCta, setShowStickyCta] = useState(false)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      setShowStickyCta(!entry.isIntersecting)
    })

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return <div className="site">
    <div className={`sticky-cta${showStickyCta ? ' is-active' : ''}`} aria-hidden={!showStickyCta}>
      <div className="container sticky-cta-in">
        <a className="sticky-phone btn btn-ghost btn-on-dark" href="tel:+18474801578" aria-label="Call NorthShore Endodontics at (847) 480-1578" tabIndex={showStickyCta ? 0 : -1}><Phone size={16} /> (847) 480-1578</a>
        <a className="btn btn-primary" href="tel:+18474801578" aria-label="Call NorthShore Endodontics to schedule at (847) 480-1578" tabIndex={showStickyCta ? 0 : -1}>Call to schedule</a>
      </div>
    </div>

    <header><div className="container head-in"><div className="brand" aria-label="NorthShore Endodontics"><img src="/assets/northshore-logo.webp" alt="NorthShore Endodontics" /><a className="header-phone btn btn-ghost btn-on-dark" href="tel:+18474801578" aria-label="Call NorthShore Endodontics at (847) 480-1578"><Phone size={16} /> (847) 480-1578</a></div></div></header>

    <main id="top">
      <section className="hero reveal-section" ref={heroRef} data-reveal><img className="hero-image" src="/assets/hero-care.webp" alt="Patient smiling during a comfortable dental visit" width="1140" height="400" fetchPriority="high" /><div className="container hero-in"><div><p className="eyebrow light">Specialized care. Lasting confidence.</p><h1>Keep your natural smile <em>healthy.</em></h1><p className="lead">Expert endodontic care with a calm, personal approach—so you can get back to the moments that make you smile.</p><div className="note"><ShieldCheck size={18} /> Proudly serving Northbrook and the North Shore</div></div></div></section>

      <section className="section container intro reveal-section" data-reveal><small className="eyebrow">A better endodontic experience</small><div><h2>Specialized care, delivered with <em>clarity.</em></h2><div><p>At NorthShore Endodontics, we combine advanced technology with the kind of personal attention that makes a difference. From your first call to your final follow-up, you’ll know what to expect.</p></div></div></section>

      <section className="section services reveal-section" id="services" data-reveal><div className="container"><div className="services-intro"><div><small className="eyebrow">Endodontic care, made clear</small><h2>The right care for<br /><em>what’s inside.</em></h2></div><div><p>We focus exclusively on the inside of the tooth—using precise, conservative treatment to relieve pain and protect your natural smile.</p></div></div><div className="service-grid">{services.map(([number, title, text, label]) => <article className="service-card" key={title}><span className="service-number">{number}</span><div className="service-main"><Stethoscope size={22} /><h3>{title}</h3><p>{text}</p></div><span className="service-label">{label}</span></article>)}</div></div></section>

      <section className="section doctors reveal-section" id="doctors" data-reveal><div className="container doctor-copy"><small className="eyebrow">Meet your doctors</small><h2>Experience you can <em>feel.</em></h2><p>Our doctors bring expertise, patience, and a shared belief that the best care starts with listening.</p><div className="doctor-definition"><small>What is an endodontist?</small><p>An endodontist is a dentist with additional postgraduate training focused on root canal treatment, dental pulp, and the tissues around the roots of teeth.</p></div></div><div className="doctor-grid"><article className="doc"><figure className="doctor-portrait"><img className="doctor-image" src="/assets/dr-rosenbaum.webp" alt="Dr. David Rosenbaum" width="767" height="901" loading="lazy" /></figure><div className="doctor-details"><small>Endodontist</small><h3>Dr. David Rosenbaum</h3><p>Dr. Rosenbaum grew up in the Los Angeles area, earned an economics degree from UCLA, and received his dental degree from Northwestern University in 1982. He then served two years in the United States Public Health Service, including community-clinic and outreach work. After practicing general dentistry in California, he returned to Chicago in 1996 for Northwestern’s full-time endodontic residency, earning his master’s degree and specialty certificate in 1998. He became a Diplomate of the American Board of Endodontics in 2007 and has served in leadership roles with the Illinois Association of Endodontists and Chicago Dental Society.</p></div></article><article className="doc"><figure className="doctor-portrait"><img className="doctor-image" src="/assets/dr-rex.webp" alt="Dr. Carl Rex" width="372" height="372" loading="lazy" /></figure><div className="doctor-details"><small>Endodontist</small><h3>Dr. Carl Rex</h3><p>Dr. Rex was born and raised in the Chicagoland suburb of Medinah. He completed Marquette University’s accelerated Pre-dental Scholars Program, graduated magna cum laude, and received the International College of Dentists Leadership Award. After a general practice residency at the San Francisco VA Medical Center and several years practicing general dentistry, he completed advanced endodontic training at Saint Louis University in 2023, earning his endodontic certificate and master’s degree. His research focused on CBCT 3D radiographic imaging, and he is a member of the American Association of Endodontists and other dental organizations.</p></div></article></div></section>

      <section className="section resources reveal-section" id="patients" data-reveal><div className="container"><div className="heading"><div><small className="eyebrow">Forms & resources</small><h2>Prepare before<br /><em>your first visit.</em></h2></div><p>Complete patient forms in advance, or download a referral card for a patient who needs specialty care.</p></div><div className="visit-expectations"><div><small>What to expect</small><h3>A clear plan from the first conversation.</h3><p>Bring your completed forms and any questions you have. We’ll review your concerns, explain the diagnosis, and discuss your treatment options with you.</p></div></div><div className="resource-cards"><a className="resource-card btn btn-ghost" href="/forms/patient-registration-editable.pdf" target="_blank" rel="noreferrer"><h3>Patient registration</h3><p>Contact details, insurance, and emergency information.</p><strong>Open form <ArrowRight size={15} /></strong></a><a className="resource-card btn btn-ghost" href="/forms/medical-history-editable.pdf" target="_blank" rel="noreferrer"><h3>Medical history</h3><p>Medical questions, medications, allergies, and physician details.</p><strong>Open form <ArrowRight size={15} /></strong></a><a className="resource-card btn btn-ghost" href="/forms/hipaa-notice-2026-editable.pdf" target="_blank" rel="noreferrer"><h3>HIPAA notice</h3><p>Review the updated privacy notice and complete the acknowledgment.</p><strong>Open form <ArrowRight size={15} /></strong></a><a className="resource-card btn btn-ghost" href="/forms/referral-card.jpg" target="_blank" rel="noreferrer"><h3>Referring dentists</h3><p>Download and share this referral card with a patient who needs endodontic care.</p><strong>Open referring dentists <ArrowRight size={15} /></strong></a></div></div></section>

      <section className="section education reveal-section" id="education" data-reveal><div className="container"><div className="heading"><div><small className="eyebrow">Patient education</small><h2>Understand your<br /><em>endodontic care.</em></h2></div><p>Trusted information from the American Association of Endodontists, gathered in one easy-to-use patient resource center.</p></div><a className="education-feature" href="https://www.aae.org/patients/" target="_blank" rel="noreferrer"><div><span>American Association of Endodontists</span><h3>Explore the AAE patient resource center</h3><p>Learn about root canals, endodontic treatment, symptoms, and caring for your natural teeth from the specialty’s leading patient education resource.</p></div><strong>Visit patient education <ArrowRight size={18} /></strong></a></div></section>

      <section className="section visit reveal-section" id="visit" data-reveal><div className="container visit-in"><div><small className="eyebrow">Start your visit</small><h2>Clear answers.<br /><em>Comfortable care.</em></h2><p>Call our office directly and our team will help you understand the next step for your care.</p></div><div className="steps">{[['01', 'Call our office', 'Speak with our team during office hours.'], ['02', 'Get clear guidance', 'We’ll answer your questions and explain what to expect.'], ['03', 'Feel confident moving forward', 'You’ll have a clear plan for your next visit.']].map(([number, title, text]) => <div key={number}><b>{number}</b><span><strong>{title}</strong><small>{text}</small></span></div>)}</div></div></section>

      <section className="section contact reveal-section" id="contact" data-reveal><div className="container contact-in"><div><small className="eyebrow">Contact us now</small><h2>Let’s get you<br /><em>feeling better.</em></h2><p>Call our Northbrook office directly. We’ll be glad to answer your questions and help you understand the next step.</p><div className="details"><a className="btn btn-ghost btn-on-dark" href="tel:8474801578"><Phone size={18} /> (847) 480-1578</a><span><Clock3 size={18} /> Mon, Tue & Thu 8:30 AM–5 PM · Fri 8 AM–1 PM</span></div><div className="contact-policies"><div><strong>Insurance and billing</strong><span>We accept most traditional insurance plans. Call to verify coverage.</span></div><div><strong>Payment options</strong><span>Checks, cash, credit cards, and flexible payment plans may be available.</span></div></div></div><div className="address"><small>Visit our office</small><p>1500 Shermer Rd #300<br />Northbrook, IL 60062</p><a className="btn btn-ghost btn-on-dark" href="https://www.google.com/maps/search/?api=1&query=1500+Shermer+Rd+Northbrook+IL+60062" target="_blank" rel="noreferrer">Get directions <ArrowRight size={16} /></a></div><div className="map-sheet contact-map"><a className="map-sheet-header" href="https://www.google.com/maps/search/?api=1&query=1500+Shermer+Rd+Northbrook+IL+60062" target="_blank" rel="noreferrer" aria-label="Open directions to NorthShore Endodontics in Google Maps"><div><small className="eyebrow">Find our office</small><h3>1500 Shermer Rd #300<br />Northbrook, IL 60062</h3></div><strong>Open in Google Maps <ArrowRight size={18} /></strong></a><iframe title="Map showing NorthShore Endodontics at 1500 Shermer Road in Northbrook" src="https://www.google.com/maps?q=1500+Shermer+Rd+Northbrook+IL+60062&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section>
    </main>

    <footer><div className="container foot"><div className="brand"><img src="/assets/northshore-logo.webp" alt="NorthShore Endodontics" /></div><span>© 2026 NorthShore Endodontics</span><span>Privacy & accessibility</span></div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
