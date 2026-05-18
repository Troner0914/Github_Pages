import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const projects = [
    {
      id: 1,
      title: "인공지능 에이전트 시스템 (n8n & Python)",
      desc: "API 호출 최적화 및 서버 부하 감소를 위한 백엔드/자동화 파이프라인 구축 프로젝트",
      stacks: ["n8n", "Python", "Docker", "GCP"],
      link: "#"
    },
    {
      id: 2,
      title: "웹 서버 인프라 및 네트워크 구축",
      desc: "Ubuntu VM 환경에서 SSL 인증서 적용 및 방화벽/고정 IP 설정을 통한 안정적인 웹 서비스 환경 구축",
      stacks: ["Ubuntu", "Apache", "Certbot", "Cloudflare"],
      link: "#"
    },
    {
      id: 3,
      title: "게임 데이터 정의 및 패치 모드 개발",
      desc: "XML 데이터 정의 및 C# Harmony 패치를 활용한 게임 내 메커니즘 변형 및 기능 확장 프로젝트",
      stacks: ["C#", "Harmony", "XML"],
      link: "#"
    }
  ];

  return (
    <div className={`portfolio-container ${theme}-theme`}>
      {/* Header & Navigation */}
      <header className="navbar">
        <div className="logo">Dev_Doyun.io</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          
          {/* 전문적인 아이콘 형태의 토글 버튼 */}
          <button className="theme-toggle-icon-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? (
              /* 밤 모드로 바꾸는 달 아이콘 (경량 라인 SVG) */
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              /* 낮 모드로 바꾸는 태양 아이콘 (경량 라인 SVG) */
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="hero-section">
        <div className="hero-content">
          <span className="badge">Software Engineer Portfolio</span>
          <h1>안녕하세요, <br/><span className="highlight">인프라와 기능 구현</span>에 몰두하는 개발자입니다.</h1>
          <p className="hero-sub">
            안정적인 네트워크 인프라 구축부터 데이터 처리 로직, 자동화 파이프라인까지 <br />
            시스템의 시작과 끝을 탄탄하게 연결하는 것을 즐깁니다.
          </p>
          <button className="cta-btn" onClick={() => window.location.href='#projects'}>프로젝트 보기</button>
        </div>
      </section>

      {/* Tech Skills Section */}
      <section id="skills" className="skills-section">
        <h2>Tech Stacks</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Development</h3>
            <p>React, JavaScript, C#, Python, XML</p>
          </div>
          <div className="skill-category">
            <h3>Server & Network</h3>
            <p>Linux (Ubuntu), Apache, TCP/IP, Docker, GCP</p>
          </div>
          <div className="skill-category">
            <h3>Tools & DevOps</h3>
            <p>Git, GitHub, n8n, Cloudflare</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="stack-badges">
                  {project.stacks.map((stack, index) => (
                    <span key={index} className="stack-badge">{stack}</span>
                  ))}
                </div>
              </div>
              <a href={project.link} className="project-link">자세히 보기 →</a>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Doyun. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;