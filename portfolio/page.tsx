'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Code2,
  Mail,
  Menu,
  X,
} from 'lucide-react'

const skills = [
  { label: 'C++', level: 'Learning', width: '42%' },
  { label: 'Data Structures & Algorithms', level: 'Learning', width: '34%' },
  { label: 'HTML / CSS / JavaScript', level: 'Building', width: '56%' },
]

const learningPath = [
  { number: '01', title: 'Programming foundations', text: 'Getting fluent with C++ and writing clean, readable code.' },
  { number: '02', title: 'Problem solving', text: 'Practicing data structures, algorithms, and the habits behind better solutions.' },
  { number: '03', title: 'The web', text: 'Turning ideas into thoughtful, responsive interfaces with HTML, CSS, and JavaScript.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="site-shell">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-mark">M</span>
          <span>Mohit<span className="violet">.</span></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#learning" onClick={closeMenu}>Learning</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="mailto:mohitchaursiya008@gmail.com" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <section id="top" className="hero section-frame">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Portfolio / 2026</p>
          <h1>Mohit<br /><span className="violet-gradient">Chaurasiya.</span></h1>
          <p className="hero-description"><strong>First-year B.Tech CSE-DS student</strong> focused on programming fundamentals, data structures, algorithms, and modern web development.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#learning">View capabilities <ArrowUpRight size={17} /></a>
            <a className="text-button" href="mailto:mohitchaursiya008@gmail.com">Get in touch <span>→</span></a>
          </div>
          <div className="social-buttons"><a href="https://github.com/mohitchaursiya008-dotcom" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="https://linkedin.com/in/mohit-chaursiya" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a></div>
        </div>
        <div className="hero-visual" aria-label="Mohit Chaurasiya introduction">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="code-card">
            <div className="card-top"><span className="card-dot red" /><span className="card-dot yellow" /><span className="card-dot green" /><span className="file-name">mohit.cpp</span></div>
            <div className="code-lines" aria-hidden="true">
              <span><i>01</i> <b>#include</b> <em>&lt;iostream&gt;</em></span>
              <span><i>02</i></span>
              <span><i>03</i> <strong>int</strong> main() {'{'}</span>
              <span><i>04</i> &nbsp; cout <b>&lt;&lt;</b> <em>&quot;Hello, world!&quot;</em>;</span>
              <span><i>05</i> &nbsp; <strong>return</strong> <em>0</em>;</span>
              <span><i>06</i> {'}'}</span>
            </div>
            <div className="terminal-line"><span className="prompt">$</span> learning_mode <span className="cursor" /></div>
          </div>
          <div className="floating-tag tag-top">&lt; curious /&gt;</div>
          <div className="floating-tag tag-bottom">01 — 01</div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><span>CURIOSITY</span><b>✦</b><span>CONSISTENCY</span><b>✦</b><span>CREATIVITY</span><b>✦</b><span>CURIOSITY</span><b>✦</b><span>CONSISTENCY</span></div>

      <section id="about" className="about section-frame split-section">
        <div className="section-label"><span>01</span><span className="label-line" /> <span>About me</span></div>
        <div className="about-content"><p className="section-kicker">A student with a <span className="violet">builder&apos;s mindset.</span></p><h2>Small steps.<br />Real progress.</h2><p className="body-copy">Right now, I&apos;m focused on building strong fundamentals and understanding how things work under the hood. I enjoy the quiet satisfaction of solving a tricky problem, then bringing those ideas to life on the web.</p><a className="inline-link" href="https://github.com/mohitchaursiya008-dotcom" target="_blank" rel="noreferrer">See what I&apos;m building <ArrowUpRight size={16} /></a></div>
      </section>

      <section id="learning" className="learning section-frame">
        <div className="section-heading"><div><div className="section-label"><span>02</span><span className="label-line" /> <span>Current focus</span></div><h2>Learning in<br /><span className="violet">public.</span></h2></div><p>There&apos;s a lot to learn, and that&apos;s exactly what makes it exciting. Here&apos;s where my attention is today.</p></div>
        <div className="learning-grid">{learningPath.map((item) => <article className="learning-card" key={item.number}><span className="card-number">{item.number}</span><Code2 size={23} className="card-icon" /><h3>{item.title}</h3><p>{item.text}</p><span className="card-arrow">↗</span></article>)}</div>
        <div className="skills-row"><span className="skills-title">Skills in progress</span>{skills.map((skill) => <div className="skill" key={skill.label}><div className="skill-meta"><span>{skill.label}</span><small>{skill.level}</small></div><div className="skill-track"><span style={{ width: skill.width }} /></div></div>)}</div>
      </section>

      <section id="contact" className="contact section-frame"><div className="contact-inner"><p className="eyebrow">Have an idea or just want to say hi?</p><h2>Let&apos;s make something<br /><span className="violet-gradient">meaningful.</span></h2><a className="email-link" href="mailto:mohitchaursiya008@gmail.com">mohitchaursiya008@gmail.com <ArrowUpRight size={22} /></a></div></section>

      <footer className="footer section-frame"><span>© 2026 Mohit Chaurasiya</span><span>Growing one line at a time.</span><div className="socials"><a href="mailto:mohitchaursiya008@gmail.com" aria-label="Email Mohit"><Mail size={17} /></a><a href="https://linkedin.com/in/mohit-chaursiya" target="_blank" rel="noreferrer" aria-label="Mohit on LinkedIn">in</a><a href="https://github.com/mohitchaursiya008-dotcom" target="_blank" rel="noreferrer" aria-label="Mohit on GitHub">GH</a></div></footer>
    </main>
  )
}

