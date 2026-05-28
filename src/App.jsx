import { useEffect, useRef, useState } from 'react'
import './index.css'

/* ── SVG Icon Components ── */
function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 1.5H2.5V10.5M1.5 1.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function BlueskyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 10.8c-1.087-2.114-4.046-6.056-6.858-7.8C3.188.553 1.562.492 1.562 2.65c0 1.988.146 5.158.326 7.468C2.552 11.814 3.78 13 5.173 13c.518 0 1.035-.14 1.48-.416l1.607-1.007 1.607 1.007c.445.276.962.416 1.48.416 1.393 0 2.62-1.186 2.715-2.882.18-2.31.326-5.47.326-7.468 0-2.158-1.626-2.097-3.582-.65C12.118 4.68 9.16 8.623 8.08 10.8"/>
      <path d="M12 13.5v8.5H9.5v-8.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v8.5H2V13.5c0-1.105.895-2 2-2h1.5v1H4c-.552 0-1 .448-1 1v7.5h2v-8.5c0-1.105.895-2 2-2h1.5v1H7c-.552 0-1 .448-1 1v7.5h2v-8.5c0-1.105.895-2 2-2h1.5v1H12c-.552 0-1 .448-1 1v7.5h2v-8.5c0-1.105.895-2 2-2h1.5v1H17c-.552 0-1 .448-1 1v7.5h2V13.5c0-1.105.895-2 2-2h1.5v1H21c-.552 0-1 .448-1 1v7.5h2v-8.5c0-1.105.895-2 2-2H24v10.5h-4v-8.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v8.5h-2.5v-8.5c0-1.105.895-2 2-2h1.5v1H18c-.552 0-1 .448-1 1v7.5h2v-8.5c0-1.105.895-2 2-2h1.5v1H23c-.552 0-1 .448-1 1v7.5h2V13.5h-4.5c-1.105 0-2 .895-2 2v8.5H12v-8.5c0-1.105-.895-2-2-2z"/>
    </svg>
  )
}

/* ── Scroll Reveal Hook ── */
function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return ref
}

function Reveal({ children, className = '', delay = '' }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${delay} ${className}`}>
      {children}
    </div>
  )
}

/* ── Cursor Glow ── */
function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let raf
    const update = (e) => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY })
      })
    }
    window.addEventListener('mousemove', update)
    return () => {
      window.removeEventListener('mousemove', update)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y }}
    />
  )
}

/* ── Nav ── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="nav-logo">srujith<span style={{ color: 'var(--accent-amber)' }}>.</span></a>

      <button
        className="nav-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={() => setMobileOpen(false)}>Let's Talk</a>
        </li>
      </ul>
    </nav>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-orb hero-orb--1"></div>
      <div className="hero-orb hero-orb--2"></div>
      <div className="hero-orb hero-orb--3"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">Designer · Developer · Creator</p>
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Srujith</span>
        </h1>
        <p className="hero-subtitle">
          I build digital experiences that feel alive — thoughtful interfaces,
          performant systems, and designs that leave a lasting impression.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowUpRight />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── Stats ── */
function Stats() {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Shipped' },
    { number: '30+', label: 'Happy Clients' },
    { number: '∞', label: 'Cups of Coffee' },
  ]

  return (
    <Reveal className="stats-row">
      {stats.map((s, i) => (
        <div key={i} className="stat-item">
          <div className="stat-number">{s.number}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </Reveal>
  )
}

/* ── Marquee ── */
function Marquee() {
  const items = ['React', 'TypeScript', 'Node.js', 'Design Systems', 'UI/UX', 'Next.js', 'Python', 'Cloud Architecture', 'Figma', 'Creative Coding']

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="dot"></span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── About ── */
function About() {
  return (
    <section className="section about" id="about">
      <Reveal>
        <span className="section-eyebrow">01 — About</span>
        <h2 className="section-title">Crafting digital<br/>experiences with purpose</h2>
        <div className="section-divider"></div>
      </Reveal>

      <div className="about-grid">
        <Reveal className="reveal-delay-1">
          <div className="about-portrait">
            <div className="about-portrait-placeholder">
              <span className="initials">S</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="reveal-delay-2">
          <div className="about-text">
            <p>
              I'm a designer and developer who believes the best digital products
              are born at the intersection of aesthetics and engineering.
            </p>
            <p>
              With a background spanning full-stack development, design systems,
              and creative technology, I bring a holistic perspective to every
              project. I don't just build things — I craft experiences that
              resonate.
            </p>
            <p>
              When I'm not pushing pixels or writing code, you'll find me
              exploring typography, experimenting with generative art, or
              hunting for the perfect cup of coffee.
            </p>

            <div className="about-tags">
              <span className="about-tag">Frontend</span>
              <span className="about-tag">Backend</span>
              <span className="about-tag">UI/UX Design</span>
              <span className="about-tag">Creative Dev</span>
              <span className="about-tag">Design Systems</span>
              <span className="about-tag">Cloud</span>
              <span className="about-tag">TypeScript</span>
              <span className="about-tag">React</span>
              <span className="about-tag">Node.js</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── Projects ── */
function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Kudikala',
      desc: 'A modern real estate platform with immersive property listings, interactive maps, and a seamless booking experience built for the Indian market.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Mapbox'],
      href: '#',
    },
    {
      number: '02',
      title: 'BitOutput',
      desc: 'Enterprise-grade data processing pipeline handling millions of records daily. Built for reliability, speed, and operational excellence.',
      tags: ['Python', 'AWS', 'Docker', 'Kafka'],
      href: '#',
    },
    {
      number: '03',
      title: 'Srujith Portfolio',
      desc: 'This very website — a personal playground for experimenting with bold design, atmospheric visuals, and delightful motion.',
      tags: ['React', 'CSS', 'Vite'],
      href: '#',
    },
    {
      number: '04',
      title: 'Interactive Broker Tools',
      desc: 'Trading infrastructure tools that help investors submit orders efficiently. Real-time data, low latency, zero compromises.',
      tags: ['TypeScript', 'REST API', 'WebSocket'],
      href: '#',
    },
  ]

  return (
    <section className="section" id="projects">
      <Reveal>
        <span className="section-eyebrow">02 — Work</span>
        <h2 className="section-title">Selected projects</h2>
        <div className="section-divider"></div>
      </Reveal>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={i} className={`reveal-delay-${Math.min(i + 1, 4)}`}>
            <a href={p.href} className="project-card">
              <span className="project-card-number">{p.number}</span>
              <h3 className="project-card-title">{p.title}</h3>
              <p className="project-card-desc">{p.desc}</p>
              <div className="project-card-tags">
                {p.tags.map(t => <span key={t} className="project-card-tag">{t}</span>)}
              </div>
              <span className="project-card-arrow">
                <ArrowUpRight />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ── Skills ── */
function Skills() {
  const skills = [
    {
      icon: '◆',
      title: 'Frontend Development',
      desc: 'React, Next.js, TypeScript, and modern CSS. Building interfaces that are fast, accessible, and a joy to use.',
    },
    {
      icon: '◇',
      title: 'Backend & APIs',
      desc: 'Node.js, Python, REST & GraphQL APIs. Designing robust server architectures that scale with your business.',
    },
    {
      icon: '○',
      title: 'Design Systems',
      desc: 'Component libraries, design tokens, and consistent UI patterns that keep products cohesive at any scale.',
    },
    {
      icon: '△',
      title: 'Creative Technology',
      desc: 'Generative art, interactive visuals, and experimental web experiences that push the boundaries of what\'s possible.',
    },
  ]

  return (
    <section className="section" id="skills">
      <Reveal>
        <span className="section-eyebrow">03 — Expertise</span>
        <h2 className="section-title">What I bring to the table</h2>
        <div className="section-divider"></div>
      </Reveal>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <Reveal key={i} className={`reveal-delay-${i + 1}`}>
            <div className="skill-card">
              <div className="skill-icon">{s.icon}</div>
              <h3 className="skill-card-title">{s.title}</h3>
              <p className="skill-card-desc">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ── Contact ── */
function Contact() {
  const socials = [
    { icon: <GithubIcon />, label: 'GitHub', href: 'https://github.com/TheGreatGooo' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
    { icon: <TwitterIcon />, label: 'X / Twitter', href: '#' },
    { icon: <BlueskyIcon />, label: 'Bluesky', href: '#' },
  ]

  return (
    <section className="section contact" id="contact">
      <Reveal>
        <span className="section-eyebrow">04 — Contact</span>
        <h2 className="section-title">Let's build something<br/>great together</h2>
        <div className="section-divider"></div>
        <p className="contact-text">
          Have a project in mind, want to collaborate, or just want to say hello?
          I'd love to hear from you.
        </p>
      </Reveal>

      <Reveal className="reveal-delay-1">
        <div className="contact-links">
          {socials.map((s, i) => (
            <a key={i} href={s.href} className="contact-link" target="_blank" rel="noopener noreferrer">
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal className="reveal-delay-2">
        <p className="contact-email">
          <a href="mailto:hello@srujith.com">hello@srujith.com</a>
        </p>
      </Reveal>
    </section>
  )
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Designed & built with <span className="heart">♥</span> by Srujith — {new Date().getFullYear()}
      </p>
    </footer>
  )
}

/* ── App ── */
function App() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <Hero />
      <Stats />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
