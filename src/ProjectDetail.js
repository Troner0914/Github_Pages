// src/ProjectDetail.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProjectDetail({ projects }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 논문 펼치기/접기 상태 관리
  const [isPaperExpanded, setIsPaperExpanded] = useState(false);

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="detail-section">
        <div className="detail-container">
          <h2>프로젝트를 찾을 수 없습니다.</h2>
          <button className="back-btn" onClick={() => navigate('/')}>← 메인으로 돌아가기</button>
        </div>
      </div>
    );
  }

  return (
    <section className="detail-section">
      <div className="detail-container">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← 메인으로 돌아가기
        </button>
        <h2 className="detail-title">{project.title}</h2>
        <div className="detail-stacks">
          {project.stacks.map((stack, index) => (
            <span key={index} className="detail-stack-badge">{stack}</span>
          ))}
        </div>
        
        <div className="detail-content-box">
          <h3>Project Overview</h3>
          <p>{project.details}</p>
        </div>

        {/* 1번 프로젝트(인공지능 에이전트 시스템)일 때 졸업논문 기반 상세 아카이브 출력 */}
        {project.id === 1 && (
          <div className="academic-paper-container">
            <div className="paper-header">
              <span className="journal-tag">Bachelor's Thesis Preview</span>
              <h1 className="paper-title">아이의 언어발달 저해 방지를 위한 의사소통 AI</h1>
              <p className="paper-subtitle">Communication AI to Prevent Language Development Delays in Children</p>
              
              <div className="paper-meta">
                <span className="author">저자: 왕승욱, 신홍선, 조윤상, 김도윤</span>
                <span className="affiliation">국립목포해양대학교 해양컴퓨터공학과</span>
              </div>
            </div>

            {/* 국문 요약 (Abstract) */}
            <div className="paper-abstract">
              <h4>Abstract</h4>
              <p>
                본 연구는 최근 맞벌이 가구의 증가로 인해 발생하는 아동의 언어 자극 부족 및 발달 지연 문제를 해결하기 위해, 
                능동적 상호작용이 가능한 대화형 AI 에이전트 시스템 'YOUDALEE(유달이)'를 제안한다. 기존의 어린이용 AI 서비스는 
                단방향 콘텐츠 제공이나 수동적인 문답 방식에 그쳐 실질적인 의사소통 능력을 함양하는 데 한계가 있었다. 
                이에 본 연구에서는 아동의 일상 대화와 교과 학습을 동시에 지원하는 MCP(Model Context Protocol) 기반의 지능형 에이전트를 설계하였다.
              </p>
              <p style={{ marginTop: '0.5rem' }}>
                본 시스템은 JavaScript와 n8n(JSON) 기반을 통해 사용자의 일정과 기상 정보를 실시간으로 분석하고, AI가 먼저 대화를 시도하는 
                '선대화' 기능을 구현하여 아동의 발화를 유도한다. 또한 학습 질의에 대한 환각(Hallucination)을 통제하기 위해, 초등 수학·영어 국가 교육과정 
                문서를 기반으로 Supabase Vector Store를 활용한 RAG(검색 증강 생성) 기술을 접목했다. 성능 평가 결과, 기존 단일 스크립트(Python) 방식 대비 
                데이터베이스 저장 용량이 대폭 증가했음에도 불구하고 AI 에이전트의 효율적인 툴 체인 최적화를 통해 평균 응답 처리 시간을 기존 7~8초대에서 5~6초대로 
                단축하는 성과를 거두었다.
              </p>
            </div>

            {/* 논문 실제 본문 구역 (상태에 따라 접히고 펼쳐짐) */}
            <div className={`paper-body-preview ${isPaperExpanded ? 'expanded' : 'collapsed'}`}>
              
              {/* 1. 서론 */}
              <div className="paper-section">
                <h4>1. 서론 (Introduction)</h4>
                <h5>1.1 연구 배경과 목적</h5>
                <p>
                  디지털 기술의 발달과 함께 사회 구조가 급변하면서, 맞벌이 가구 비율의 증가는 아동의 발달 환경에 중대한 영향을 미치고 있다. 
                  통계청의 지역별 고용조사(2023)에 따르면 국내 유배우 가구 중 맞벌이 가구의 비중은 역대 최고치를 기록하며 꾸준히 상승하는 추세이며, 
                  이는 부모가 가정 내에서 자녀와 직접 상호작용할 수 있는 시간의 물리적 감소로 이어진다. 아동의 언어 발달에 있어 성인과의 
                  '양방향 대화 주고받기 경험'은 뇌의 언어 중추 발달과 밀접한 연관이 있으며 문해력과 인지 발달에 필수적이다. 그러나 현대 가정에서는 
                  소통의 공백을 스마트폰이나 TV 같은 디지털 기기가 대체하면서 기술에 의한 대화 단절인 '테크노퍼런스(Technoference)' 현상을 심화시켜 
                  아동을 수동적인 청자로 전락시킬 위험이 있다.
                </p>
                <h5>1.2 시중 제품과의 차별성</h5>
                <p style={{ marginTop: '0.5rem' }}>
                  현재 시중의 어린이용 AI 서비스(기가지니 키즈, 클로바 키즈 등)는 단방향 영상 콘텐츠 제공 위주이거나 아동의 학습 진도를 반영하지 못하고, 
                  사용자가 먼저 호출해야만 응답하는 수동적 상호작용 방식에 머물러 대화의 주도성이 부족한 아동에게 능동적 자극을 주지 못한다. 
                  이에 본 연구에서는 구글 캘린더 일정과 날씨 정보를 기반으로 AI가 먼저 말을 거는 '선대화' 기능, RAG 기반의 국가 교육과정 수학·영어 학습 지원, 
                  부모 전용 웹 대시보드를 통한 데이터 기반 개인화를 실현하여 이러한 구조적 한계를 보완하였다.
                </p>
              </div>

              {/* 2. 관련 기술 */}
              <div className="paper-section">
                <h4>2. 관련 기술 (Related Technology)</h4>
                <h5>2.1 AI Agent 와 MCP (Model Context Protocol)</h5>
                <p>
                  기존의 정적인 API 호출 방식은 사전에 정의된 경로와 매개변수에 의존해야 하는 한계가 존재했다. 반면, MCP는 AI 에이전트가 사용자의 
                  문맥(Context)을 분석하여 필요한 기능을 실시간으로 판단하고 자율적으로 도구를 선택 및 호출하는 동적 실행 환경을 제공한다. 
                  이를 표준 프로토콜로 구축함으로써 복잡한 하드코딩 분기 처리 없이 시스템 확장성을 극대화하고 개발 리소스를 최소화하였다.
                </p>
                <h5>2.2 RAG 및 임베딩 구조 (Retrieval-Augmented Generation)</h5>
                <p style={{ marginTop: '0.5rem' }}>
                  생성형 AI가 불확실한 정보를 사실인 것처럼 표현하는 환각(Hallucination) 현상을 통제하기 위해 검색 증강 생성(RAG) 기술을 도입했다. 
                  초등학교 1~3학년 수준의 수학 및 영어 국가 교육과정 문서를 'Embeddings Google Gemini' 모델을 통해 고차원의 실수 벡터로 변환하여 
                  Supabase Vector Store에 저장 및 인덱싱 처리했다. 사용자의 자연어 질문이 들어오면 코사인 유사도(Cosine Similarity) 알고리즘을 통한 
                  시맨틱 검색을 수행하여, 단순 키워드가 정확히 일치하지 않더라도 문맥적으로 가장 근접한 교육과정 레퍼런스를 추출함으로써 답변의 신뢰성과 일관성을 대폭 향상시켰다.
                </p>
                <h5>2.3 n8n 워크플로우 설계</h5>
                <p style={{ marginTop: '0.5rem' }}>
                  AI Agent와 외부 MCP 서버 간의 통신 및 로직 제어를 위해 워크플로우 자동화 도구인 n8n을 전면 도입했다. 
                  노드 기반 구조를 통해 프로세스를 모듈화함으로써 운영 효율성을 높이고 전체 시스템의 구축 시간을 최소화하였다.
                </p>
              </div>

              {/* 3. 시스템 아키텍처 및 네트워크 설계 */}
              <div className="paper-section">
                <h4>3. 시스템 아키텍처 및 네트워크 설계 (System Architecture)</h4>
                <h5>3.1 사용자가 먼저 대화하는 경우 (HTTP POST 파이프라인)</h5>
                <p>
                  클라이언트 브라우저 환경에서 JavaScript 및 내장 Web STT API를 통해 사용자의 음성을 감지하여 실시간으로 텍스트로 변환한다. 
                  이 변환된 텍스트는 비동기 Fetch API를 통해 n8n 웹훅 엔드포인트(`children_talk_to_yudal`)로 HTTP POST 전송된다. 
                  데이터는 Edit Fields 노드에서 LLM 추론 엔진인 Gemini 2.5 Flash가 처리하기 적합한 구조로 정제되며, 최근 10회분의 대화 기록을 
                  슬라이딩 윈도우 방식으로 저장하는 'Simple Memory' 모듈과 병렬 연동되어 문맥의 연속성을 보장한다. AI Agent가 생성한 결과 텍스트는 
                  OpenAI TTS 모델을 거쳐 바이너리 오디오 데이터(MP3)로 변환된 뒤, 디스크 저장 과정을 배제한 'In-Memory 처리 방식'의 'Respond to Webhook' 노드를 통해 
                  HTTP 응답 헤더(`audio/mpeg`)에 실려 즉시 클라이언트로 반환 및 재생된다.
                </p>
                <h5>3.2 기기가 먼저 대화를 시작하는 경우 (능동적 선대화 파이프라인)</h5>
                <p style={{ marginTop: '0.5rem' }}>
                  n8n의 'Google Calendar Trigger'가 일정 시작 시점을 감지해 워크플로우를 활성화하면, 시스템은 JavaScript 클라이언트가 보낸 비동기 fetch(GET) 요청이 
                  도착할 때까지 'Webhook Wait' 노드를 통해 응답을 보류한다. 클라이언트단은 메인 스레드의 블로킹을 막고 상호작용 충돌을 방지하기 위해 
                  'Web Worker' 스레드를 분리하여 비동기 대기 리스너를 실행한다. 대기 상태가 해제되면 일정 명, 시작·종료 시간 등의 JSON 데이터를 기반으로 
                  Gemini 2.5 Flash 모델이 함수 호출(Function Calling)을 수행하며, 필요에 따라 기상청 API나 구글 캘린더 모듈을 연동하여 복합적인 추론 결과 대화문을 도출하고 
                  음성화하여 강제 재생 처리를 완수한다.
                </p>
              </div>

              {/* 4. 성능 평가 및 구현 결론 */}
              <div className="paper-section">
                <h4>4. 성능 평가 및 구현 결론 (Conclusion)</h4>
                <h5>4.1 데이터 기반 정량적 성능 지표</h5>
                <p>
                  시스템의 자원 활용과 시간 효율성을 극대화하기 위해 기존의 단순 Python 스크립트 API 호출 방식과 본 제안 시스템(n8n + AI Agent + MCP 구조)을 비교 검증하였다. 
                  본 제안 시스템은 Supabase 지식 베이스 및 RAG 참조 데이터 적재로 인해 데이터베이스 용량이 기존 <strong>807KB에서 24.2MB로 약 30배 이상 증가</strong>했다. 
                  그러나 AI 에이전트가 상황에 맞는 필요한 도구(Tool)만을 자율적으로 선별하여 동작 프로세스를 최적화한 결과, 하중 트래픽 환경 속에서도 
                  평균 응답 처리 시간을 기존 <strong>7~8초대에서 5~6초대로 단축</strong>시키는 유의미한 인프라 최적화 성과를 거두었다.
                </p>
                <h5>4.2 연구 결론</h5>
                <p style={{ marginTop: '0.5rem' }}>
                  본 연구에서 구현한 'YOUDALEE'는 React 기반의 컴포넌트 아키텍처와 가상 DOM 기술 덕분에 UI 렌더링 성능과 유지보수 효율을 완벽하게 확보하였다. 
                  이를 통해 가정 내 언어 자극 공백을 효과적으로 보완하고 부모의 양육 부담을 경감시키는 디지털 말동무로서의 기술적 완성도를 증명하였으며, 
                  향후 독거노인 돌봄 등 다양한 취약계층 플랫폼으로의 확장 가능성을 확인하였다.
                </p>
              </div>

              {/* 접혀있을 때 아래가 은은하게 흐려지는 그라데이션 장치 */}
              {!isPaperExpanded && <div className="paper-fade-overlay" />}
            </div>

            {/* 열기 / 접기 인터랙티브 제어 버튼 구역 */}
            <div className="paper-control-zone">
              <button className="paper-toggle-btn" onClick={() => setIsPaperExpanded(!isPaperExpanded)}>
                {isPaperExpanded ? "논문 요약 접기" : "논문 본문 읽기"}
              </button>
            
            </div>

          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectDetail;