import {
  capabilities,
  experience,
  navigation,
  profile,
  projects,
} from "./content";

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="返回首页">
        <span className="brand-mark">S</span>
        <span>{profile.name}</span>
      </a>
      <nav className="nav" aria-label="主导航">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="role">{profile.role}</p>
        <h1 id="hero-title">
          把复杂业务、可信数据与 AI 决策产品连接起来。
        </h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            邮件联系
          </a>
          <a className="button secondary" href="#projects">
            查看代表项目
          </a>
        </div>
      </div>
      <aside className="hero-panel" aria-label="核心能力摘要">
        <div>
          <span className="panel-label">Product focus</span>
          <strong>Data platform / Agent / Decision system</strong>
        </div>
        <ul>
          {profile.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </aside>
    </section>
  );
}

function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="section-intro">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <div className="section-copy">{children}</div> : null}
    </div>
  );
}

function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <SectionIntro eyebrow="Selected Projects" title="代表项目">
        <p>
          每个项目都按业务问题、产品动作、关键设计和成果证据组织，尽量保留可解释的量化口径，而不是只展示结论数字。
        </p>
      </SectionIntro>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="project-main">
              <p className="project-tag">{project.tag}</p>
              <h3>{project.title}</h3>
              <div className="project-story">
                <h4>业务问题</h4>
                <p>{project.challenge}</p>
              </div>
              <div className="project-story">
                <h4>产品动作</h4>
                <ul>
                  {project.actions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
              </div>
              <div className="project-story">
                <h4>关键设计</h4>
                <ul>
                  {project.design.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="evidence-panel" aria-label={`${project.title} 成果证据`}>
              <span className="evidence-title">成果证据</span>
              {project.evidence.map((item) => (
                <div className="evidence-item" key={`${project.title}-${item.label}`}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  <p>{item.note}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <SectionIntro eyebrow="Experience" title="经历时间线">
        <p>
          从政务数字化、工业制造到跨境电商数据平台，持续围绕复杂 B 端场景做产品抽象、数据治理和智能决策落地。
        </p>
      </SectionIntro>
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={`${item.company}-${item.period}`}>
            <time>{item.period}</time>
            <div>
              <h3>{item.title}</h3>
              <p className="company">{item.company}</p>
              <p>{item.focus}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <SectionIntro eyebrow="Contact" title="联系">
        <p>
          如果需要完整简历、项目细节或进一步沟通，可以通过邮箱联系。
        </p>
      </SectionIntro>
      <a className="email-link" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="section capabilities" aria-labelledby="capabilities-title">
          <SectionIntro eyebrow="Capabilities" title="能力关键词" />
          <div className="keyword-list">
            {capabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>
        </section>
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="footer">
        <span>{profile.name}</span>
        <span>Data × AI Product</span>
      </footer>
    </>
  );
}
