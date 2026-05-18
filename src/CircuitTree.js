// src/CircuitTree.js
import React from 'react';

function CircuitTree() {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Circuit Tree</h2>
      <p className="skills-subtitle">하단 인프라 시스템을 기반으로 상위 개발 스택까지 유기적으로 확장되는 기술 트리입니다.</p>
      
      <div className="circuit-tree-wrapper">
        {/* 💡 최적화 1: SVG 자체에 shape-rendering 힌트를 주입하여 브라우저의 중복 픽셀 계산을 방지합니다. */}
        <svg 
          className="circuit-svg" 
          viewBox="0 0 1040 650" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
        >
          {/* 메인 뿌리 기둥 */}
          <path d="M 520 650 L 520 500" className="circuit-line root-path" />
          
          {/* 왼쪽 인프라 줄기 (1040x650 비율에 맞추어 좌표 스케일 최적화 고정) */}
          <path d="M 520 500 L 325 420 L 325 260" className="circuit-line" />
          <path d="M 325 365 L 156 315 L 156 160" className="circuit-line" />
          <path d="M 325 260 L 325 110" className="circuit-line" />
          
          {/* 오른쪽 애플리케이션/기능 개발 줄기 */}
          <path d="M 520 500 L 715 420 L 715 260" className="circuit-line" />
          <path d="M 715 365 L 884 315 L 884 160" className="circuit-line" />
          <path d="M 715 260 L 715 110" className="circuit-line" />
        </svg>

        {/* 기술 노드 위치 매핑 (1040x650 해상도 기반 절대 좌표 최적화 고정) */}
        {/* 뿌리 (최하단) */}
        <div className="tree-node node-root" style={{ left: '50%', top: '92%' }}>
          <span className="node-title">Skills</span>
        </div>

        {/* 왼쪽 진영: 인프라 / 시스템 / 서버 */}
        <div className="tree-node" style={{ left: '31.25%', top: '65%' }}>
          <span className="node-tag">OS</span>
          <span className="node-title">Linux (Ubuntu)</span>
        </div>
        <div className="tree-node" style={{ left: '15%', top: '48%' }}>
          <span className="node-tag">Network</span>
          <span className="node-title">TCP/IP & Cloudflare</span>
        </div>
        <div className="tree-node" style={{ left: '15%', top: '25%' }}>
          <span className="node-tag">DevOps</span>
          <span className="node-title">Docker / Virtual VM</span>
        </div>
        <div className="tree-node" style={{ left: '31.25%', top: '17%' }}>
          <span className="node-tag">Cloud</span>
          <span className="node-title">GCP Server</span>
        </div>

        {/* 오른쪽 진영: 개발 스택 / 데이터 / 로직 */}
        <div className="tree-node" style={{ left: '68.75%', top: '65%' }}>
          <span className="node-tag">Automation</span>
          <span className="node-title">n8n / Pipeline</span>
        </div>
        <div className="tree-node" style={{ left: '85%', top: '48%' }}>
          <span className="node-tag">Logic</span>
          <span className="node-title">Python & C#</span>
        </div>
        <div className="tree-node" style={{ left: '85%', top: '25%' }}>
          <span className="node-tag">Frontend</span>
          <span className="node-title">React (JavaScript)</span>
        </div>
        <div className="tree-node" style={{ left: '68.75%', top: '17%' }}>
          <span className="node-tag">Data</span>
          <span className="node-title">XML & Database</span>
        </div>
      </div>
    </section>
  );
}

// 💡 최적화 2: React.memo로 무조건 랩핑하여 데이터 변경 외 불필요한 가상 돔 스냅샷 비교 연산을 파괴합니다.
export default React.memo(CircuitTree);