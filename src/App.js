// src/App.js
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CircuitTree from './CircuitTree'; 
import ProjectDetail from './ProjectDetail'; 
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 네비게이션 클릭 시 해당 섹션으로 부드럽게 스크롤하는 함수
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: "인공지능 에이전트 시스템 (n8n & Python)",
      desc: "MCP 기반 지능형 에이전트와 n8n 파이프라인을 활용한 아동 맞춤형 실시간 선대화 및 RAG 연동 의사소통 AI 시스템 구축 프로젝트",
      stacks: ["n8n", "Docker", "CloudFlare"],
      details: "n8n과 AI Agent 기반으로 반복적인 외부 API 요청을 지능적으로 스케줄링하고 최적화했습니다. 이를 통해 불필요한 API 호출을 줄여 서버 로드를 대폭 감소시켰으며, CloudFlare 환경 위에 Docker 컨테이너로 파이프라인을 패키징하여 배포의 연속성을 확보했습니다."
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "TOEIC Speaking",
      issuer: "YBM (한국TOEIC위원회)",
      date: "2026.02",
      score: "IM2"
    },
    {
      id: 2,
      title: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2025.09"
    }
  ];

  return (
    <Router>
      <div className={`portfolio-container ${theme}-theme`}>
        {/* Header & Navigation */}
        <header className="navbar">
          <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Dev_Doyun.io
          </Link>
          <nav className="nav-links">
            <Link to="/" onClick={() => setTimeout(() => scrollToSection('about'), 50)}>About</Link>
            <Link to="/" onClick={() => setTimeout(() => scrollToSection('skills'), 50)}>Skills</Link>
            <Link to="/" onClick={() => setTimeout(() => scrollToSection('projects'), 50)}>Projects</Link>
            <Link to="/" onClick={() => setTimeout(() => scrollToSection('certificates'), 50)}>Certificates</Link>
            
            <button className="theme-toggle-icon-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              )}
            </button>
          </nav>
        </header>

        {/* 주소에 매핑되는 실제 페이지 라우팅 구역 */}
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section id="about" className="hero-section">
                <div className="hero-content">
                  <span className="badge">Software Engineer Portfolio</span>
                  <h1>안녕하세요, <br/><span className="highlight">인프라와 기능 구현</span>에 몰두하는 개발자입니다.</h1>
                  
                  <div className="multi-typing-container">
                    <div className="typing-line">
                      <span className="typing-text">안정적인 네트워크 인프라 구축부터</span>
                    </div>
                    <div className="typing-line">
                      <span className="typing-text">효율적인 데이터 처리 로직 설계,</span>
                    </div>
                    <div className="typing-line">
                      <span className="typing-text">최적화된 자동화 파이프라인 형성까지</span>
                    </div>
                  </div>

                  <p className="hero-sub">시스템의 시작과 끝을 탄탄하게 연결하는 것을 즐깁니다.</p>
                </div>
              </section>

              {/* 기술 트리 컴포넌트 */}
              <CircuitTree />

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
                      <Link to={`/project/${project.id}`} className="project-link" onClick={() => window.scrollTo(0, 0)}>
                        자세히 보기 →
                      </Link>
                    </div>
                  ))}
                </div>
              </section>

              {/* 자격증 및 스펙 섹션 */}
              <section id="certificates" className="certificates-section">
                <h2>Certificates & Language</h2>
                <div className="certificates-list">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="cert-item-card">
                      <div className="cert-meta-left">
                        <span className="cert-date">{cert.date}</span>
                        <h3 className="cert-title">{cert.title}</h3>
                      </div>
                      <div className="cert-info-right">
                        <span className="cert-issuer">{cert.issuer}</span>
                        {cert.score && <span className="cert-score">{cert.score}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          } />

          <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
        </Routes>

        <footer className="footer">
          <p>© 2026 Doyun. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;