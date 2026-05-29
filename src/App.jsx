import { useState, useEffect } from 'react'


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const [bootSequence, setBootSequence] = useState(true)
  const [bootLines, setBootLines] = useState([])

  useEffect(() => {
    const bootMessages = [
      'BIOS v1.0...',
      'Checking memory... 65536K OK',
      'Loading kernel...',
      'Mounting filesystems...',
      'Starting services...',
      'Postfix: OK',
      'Dovecot: OK',
      'Nginx: OK',
      'Container runtime: OK',
      'System ready.',
    ]
    let i = 0
    const interval = setInterval(() => {
      if (i < bootMessages.length) {
        setBootLines(prev => [...prev, bootMessages[i]])
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => setBootSequence(false), 400)
      }
    }, 250)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const categories = [
    {
      title: 'Backend & Infrastructure',
      icon: '>',
      items: [
        { name: 'InteractiveBrokersSubmit', desc: 'Options trading automation with IB API, knapsack allocation, circuit breakers', lang: 'Java', url: 'https://github.com/TheGreatGooo/InteractiveBrokers-AutomationWrapper' },
        { name: 'gpg-mailgate', desc: 'Postfix mailgate for S/MIME and OpenPGP email encryption', lang: 'Python', url: 'https://github.com/TheGreatGooo/gpg-mailgate' },
        { name: 'local-ai', desc: 'Local AI agent system for task automation and code generation', lang: 'Shell', url: 'https://gitea.kudikala.lan:3443/Kudikala/local-ai' },
        { name: 'HomeLabSmith', desc: 'Homelab infrastructure management and automation', lang: 'Python', url: 'https://github.com/TheGreatGooo/HomeLabSmith' },
        { name: 'docker', desc: 'Docker configuration and container orchestration', lang: 'Dockerfile', url: 'https://gitea.kudikala.lan:3443/Kudikala/docker' },
        { name: 'systemd', desc: 'Systemd unit files and service configurations', lang: 'Shell', url: 'https://gitea.kudikala.lan:3443/Kudikala/systemd' },
      ]
    },
    {
      title: 'Email & Privacy',
      icon: '>',
      items: [
        { name: 'MailExchangeProxy', desc: 'Proxy for Microsoft Exchange email with privacy controls', lang: 'Python', url: 'https://gitea.kudikala.lan:3443/Kudikala/MailExchangeProxy' },
        { name: 'opendkim-docker-image', desc: 'OpenDKIM milter Docker image for email authentication', lang: 'Makefile', url: 'https://github.com/TheGreatGooo/opendkim-docker-image' },
        { name: 'roundcube-plugin-identity-from-directory', desc: 'Auto-populate Roundcube identities from LDAP/AD', lang: 'PHP', url: 'https://github.com/TheGreatGooo/roundcube-plugin-identity-from-directory' },
        { name: 'dovecot-maildir-compress', desc: 'Compress/decompress maildir for dovecot zlib plugin', lang: 'Shell', url: 'https://github.com/TheGreatGooo/dovecot-maildir-compress' },
        { name: 'ungoogled-chromium-debian', desc: 'Ungoogled Chromium build for Debian — privacy-focused browsing', lang: 'Shell', url: 'https://github.com/TheGreatGooo/ungoogled-chromium-debian' },
        { name: 'MatrixServer', desc: 'Matrix chat server configuration and deployment', lang: '', url: 'https://gitea.kudikala.lan:3443/Kudikala/MatrixServer' },
      ]
    },
    {
      title: 'Home Lab & IoT',
      icon: '>',
      items: [
        { name: 'TasmotaScripts', desc: 'Tasmota firmware scripts for IoT device automation', lang: 'Shell', url: 'https://gitea.kudikala.lan:3443/TheGreatGooo/TasmotaScripts' },
        { name: '2GarageDoorAutomation', desc: 'Arduino-based garage door automation with ESP', lang: 'C++', url: 'https://github.com/TheGreatGooo/2GarageDoorAutomation' },
        { name: 'EnergyMonitor-ESP8266-MQTT', desc: 'Energy monitoring with ESP8266 and MQTT telemetry', lang: 'C++', url: 'https://github.com/TheGreatGooo/EnergyMonitor-ESP8266-MQTT' },
        { name: 'ATM90E36', desc: 'ATM90E36 energy metering chip Arduino SPI library', lang: 'C++', url: 'https://github.com/TheGreatGooo/ATM90E36' },
        { name: 'openhab-rules', desc: 'OpenHAB automation rules for home management', lang: '', url: 'https://gitea.kudikala.lan:3443/Kudikala/openhab-rules' },
        { name: 'n8n', desc: 'n8n workflow automation for home and infrastructure', lang: 'Markdown', url: 'https://gitea.kudikala.lan:3443/Kudikala/n8n' },
      ]
    },
    {
      title: 'Crypto & Trading',
      icon: '>',
      items: [
        { name: 'Litecoin-Dust-Settler', desc: 'Consolidate Litecoin dust into single transactions', lang: '', url: 'https://github.com/TheGreatGooo/Litecoin-Dust-Settler' },
        { name: 'CoinbaseOp', desc: 'Coinbase operational tools and automation scripts', lang: 'Python', url: 'https://github.com/TheGreatGooo/CoinbaseOp' },
        { name: 'InteractiveBrokers-AutomationWrapper', desc: 'IB TWS automation wrapper for algorithmic trading', lang: 'Java', url: 'https://github.com/TheGreatGooo/InteractiveBrokers-AutomationWrapper' },
      ]
    },
    {
      title: 'AI & LLM',
      icon: '>',
      items: [
        { name: 'ik_llama.cpp', desc: 'llama.cpp fork with SOTA quantizations and performance improvements', lang: 'C++', url: 'https://github.com/TheGreatGooo/ik_llama.cpp' },
        { name: 'Roo-Code', desc: 'VS Code AI coding assistant — multi-model, multi-agent', lang: 'TypeScript', url: 'https://github.com/TheGreatGooo/Roo-Code' },
        { name: 'mcpo-n8n-bridge', desc: 'Bridge MCP output from mcpo to N8n HTTP streams', lang: 'Python', url: 'https://github.com/TheGreatGooo/mcpo-n8n-bridge' },
        { name: 'radicale-mcp', desc: 'CalDAV/CardDAV server with MCP integration', lang: 'Python', url: 'https://github.com/TheGreatGooo/radicale-mcp' },
      ]
    },
    {
      title: 'Networking & Systems',
      icon: '>',
      items: [
        { name: 'rathole', desc: 'Lightweight reverse proxy for NAT traversal (Rust)', lang: 'Rust', url: 'https://github.com/TheGreatGooo/rathole' },
        { name: 'genhost', desc: 'Generate unused hostnames from word lists', lang: 'Shell', url: 'https://github.com/TheGreatGooo/genhost' },
        { name: 'nginx', desc: 'Nginx official mirror — web server and reverse proxy', lang: 'C', url: 'https://github.com/TheGreatGooo/nginx' },
        { name: 'postfix-mirror', desc: 'Postfix MTA official mirror', lang: 'C', url: 'https://github.com/TheGreatGooo/postfix-mirror' },
        { name: 'LinuxDesktop', desc: 'Linux desktop configuration and customization', lang: 'Shell', url: 'https://gitea.kudikala.lan:3443/Kudikala/LinuxDesktop' },
        { name: 'MatrixRestBot', desc: 'Matrix chat bot with REST API integration', lang: 'Python', url: 'https://github.com/TheGreatGooo/MatrixRestBot' },
      ]
    },
    {
      title: 'Media & Music',
      icon: '>',
      items: [
        { name: 'NavidromeRcmndSongs', desc: 'Song recommendations based on personal playlist analysis', lang: 'JavaScript', url: 'https://github.com/TheGreatGooo/NavidromeRcmndSongs' },
        { name: 'YoutubeMusic', desc: 'YouTube Music automation and scraping tools', lang: 'Python', url: 'https://gitea.kudikala.lan:3443/Kudikala/YoutubeMusic' },
        { name: 'BrainstormShuffle', desc: 'Music brainstorming and shuffle algorithms', lang: 'Python', url: 'https://github.com/TheGreatGooo/BrainstormShuffle' },
        { name: 'kids-movie-scraper', desc: 'Kids movie metadata scraper and organizer', lang: '', url: 'https://gitea.kudikala.lan:3443/Kudikala/kids-movie-scraper' },
        { name: 'telugu-movie-agent', desc: 'Telugu movie discovery and recommendation agent', lang: 'Python', url: 'https://gitea.kudikala.lan:3443/Kudikala/telugu-movie-agent' },
      ]
    },
  ]

  const stats = [
    { label: 'repos', value: '45+' },
    { label: 'languages', value: '12' },
    { label: 'years tinkering', value: '20+' },
  ]

  if (bootSequence) {
    return (
      <div className="boot-screen">
        <div className="boot-terminal">
          {bootLines.map((line, i) => (
            <div key={i} className="boot-line">
              <span className="boot-prompt">$ </span>
              {line}
            </div>
          ))}
          <div className="boot-cursor">_</div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${navScrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>
            <span className="nav-prompt">$</span> srujith
          </a>

          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about') }}>about</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects') }}>projects</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>contact</a></li>
          </ul>

          <button
            className={`nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-terminal">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">srujith@homelab</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">$</span> whoami
            </div>
            <div className="terminal-output">
              Srujith — backend developer & tinkerer
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span> cat interests.txt
            </div>
            <div className="terminal-output multi">
              <span className="tag">microcomputers</span>
              <span className="tag">homelab</span>
              <span className="tag">servers</span>
              <span className="tag">email systems</span>
              <span className="tag">privacy</span>
              <span className="tag">trading</span>
              <span className="tag">AI/LLM</span>
              <span className="tag">music</span>
              <span className="tag">Linux</span>
              <span className="tag">home automation</span>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span> <span className="cursor-blink">_</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-header">
              <span className="section-label">$ about</span>
              <h2 className="section-title">not a designer. a tinkerer.</h2>
            </div>
            <div className="about-body">
              <p>
                I'm Srujith. I build and break things — from microcomputers to homelabs to production servers.
                Mostly backend. I like systems that work, code that's clean, and privacy that isn't an afterthought.
              </p>
              <p>
                My work spans email infrastructure (Postfix, Dovecot, GPG mailgate), algorithmic trading
                (Interactive Brokers, Litecoin dust settlement), home automation (Tasmota, OpenHAB, ESP8266),
                and privacy tools (ungoogled Chromium, Matrix, OpenDKIM).
              </p>
              <p>
                I also tinker with AI/LLM (llama.cpp, local AI agents), music systems (Navidrome, YouTube Music),
                and networking (rathole reverse proxy, Docker).
              </p>
            </div>
            <div className="stats-row">
              {stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section projects" id="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-label">$ ls -la ~/projects/</span>
            <h2 className="section-title">projects</h2>
          </div>

          <div className="categories-grid">
            {categories.map((cat) => (
              <div key={cat.title} className="category">
                <h3 className="category-title">
                  <span className="category-icon">{cat.icon}</span>
                  {cat.title}
                </h3>
                <div className="project-list">
                  {cat.items.map((project) => (
                    <a
                      key={project.name}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-item"
                    >
                      <div className="project-info">
                        <span className="project-name">{project.name}</span>
                        <span className="project-desc">{project.desc}</span>
                      </div>
                      <div className="project-meta">
                        {project.lang && <span className="project-lang">{project.lang}</span>}
                        <span className="project-arrow">→</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact" id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-label">$ contact</span>
            <h2 className="section-title">get in touch</h2>
          </div>
          <div className="contact-grid">
            <a href="https://github.com/TheGreatGooo" className="contact-card" target="_blank" rel="noopener noreferrer">
              <span className="contact-icon">GH</span>
              <span className="contact-name">GitHub</span>
              <span className="contact-url">github.com/TheGreatGooo</span>
            </a>
            <a href="https://gitea.kudikala.lan:3443/TheGreatGooo" className="contact-card" target="_blank" rel="noopener noreferrer">
              <span className="contact-icon">GT</span>
              <span className="contact-name">Gitea</span>
              <span className="contact-url">gitea.kudikala.lan:3443</span>
            </a>
            <a href="mailto:hello@srujith.com" className="contact-card">
              <span className="contact-icon">EM</span>
              <span className="contact-name">Email</span>
              <span className="contact-url">hello@srujith.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-text">
            <span className="footer-prompt">$</span>
            © {new Date().getFullYear()} srujith — built on a homelab, hosted on Cloudflare Pages
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
