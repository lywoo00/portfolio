import type { Project } from "@/shared/types/project";
const data: Project[] = [
  {
    title: `개발자 공방`,
    subTitle: `코드 영향도 분석 및 문서 작성 자동화 서비스 개발`,
    info: {
      period: "2026.01 ~ 2026.02",
      skills: [
        "react",
        "next.js",
        "typescript",
        "tailwind",
        "supabase",
        "n8n",
        "github",
        "figma",
      ],
    },
    description: [
      {
        title:
          "PR 기반 문서 생성 자동화 파이프라인 or GitHub PR 분석 · 문서 생성 워크플로우(n8n)",
        item: [
          "GitHub PR Webhook으로 n8n 워크플로우를 트리거하여 변경 파일, 리뷰 댓글 등을 수집하고 데이터를 평탄화 데이터 품질 유지",
          "전체 파일에서 import 패턴을 추출해 변경 파일 기준 의존성 맵 생성. 영향 범위를 카운트해 주의 파일을 분리하고 HTML 리포트로 시각화",
          "모호한 지시 대신 문서 종류 · 말투 · 글 구조 · 독자 타겟을 필터로 분리해 입력을 구조화. 옵션별 통과/실패 예시와 자기검증 체크리스트를 포함해 결과 편차를 줄이고 일관성 향상",
        ],
        images: ["/images/devcraft01.png"],
      },
      {
        title: "컴파운드 컴포넌트 패턴 모달 구현",
        item: [
          "React Context API로 모달 상태를 전역 관리하고, createPortal로 z-index 문제 해결. 컴파운드 컴포넌트 패턴으로 Modal.Header · Modal.Body · Modal.Footer를 조립 방식으로 구성해 다양한 형태에 대응",
          "컴포넌트 외부 함수 스코프에서도 모달을 제어할 수 있도록 Promise 기반 명령형 API 설계. await modal.confirm()으로 사용자 응답을 비동기로 받는 흐름을 Context + Controller 조합으로 구현",
        ],
      },
      {
        title: "해커톤 참여",
        item: [
          "실사용자 피드백을 반영하여 UI/UX 개선",
          "문서 생성 품질과 일관성 향상을 위한 모델 프롬프트 개선",
        ],
      },
      {
        title: "Github를 이용한 협업 및 업무 효율화",
        item: [
          "GitHub Milestones와 Issues를 활용해 업무 진행도를 시각화하고, 개발 우선순위를 유연하게 조정하며 데드라인 준수",
        ],
      },
      {
        title: "개발 환경 구축 및 CI 자동화",
        item: [
          "ESLint, Prettier와 Husky를 사용하여 코드 스타일을 강제하고, 커밋 전 자동 검증을 통해 일관된 코드 품질 유지",
          "브랜치명 및 커밋 메시지 규칙(commitlint)을 적용하여 Git 워크플로우의 일관성 유지",
          "GitHub Actions 기반의 CI 파이프라인을 구축하여 PR 생성 시 빌드 안정성 및 타입 검사를 자동으로 수행하도록 설정",
        ],
      },
    ],
    links: [
      {
        label: "개발자 공방 website",
        url: "https://dev-craft-lake.vercel.app/",
      },
      {
        label: "개발자 공방 Github",
        url: "https://github.com/YY-Studios/dev-craft/",
      },
    ],
  },
  {
    title: "지아이티",
    subTitle: "자동차 진단 솔루션 반응형 웹 UI/UX 구축",
    info: {
      period: "2025.08 ~ 2025.12",
      skills: ["html", "css", "javascript", "react", "scss", "github", "figma"],
    },
    description: [
      {
        title: "공통 컴포넌트 구현",
        item: [
          "React 기반의 재사용 가능한 공통 컴포넌트 구현 작업",
          "공통 UI 컴포넌트 등록 및 유지보수를 통해 일관된 인터페이스 제공과 운영 효율성 향상",
        ],
      },
      {
        title: "반응형 웹 레이아웃 구현",
        item: [
          "현장 진단 장비 및 모바일, 태블릿 등 다양한 해상도에 대응하는 유연한 반응형 인터페이스 구축",
        ],
      },
    ],
  },
  {
    title: "하나은행 개인뱅킹 UI/UX 운영",
    subTitle: "금융 서비스의 운영 및 웹 접근성 고도화",
    info: {
      period: "2020.11 ~ 2025.03",
      skills: ["html", "css", "javascript", "figma"],
    },
    description: [
      {
        title: "사용자 중심의 컨텐츠 및 UI 컴포넌트 관리",
        item: [
          "상시 이벤트 및 공지사항 등 대고객 컨텐츠의 CMS 등록 및 배포",
          "공통 UI 컴포넌트 등록 및 유지보수를 통해 일관된 인터페이스 제공과 운영 효율성 향상",
        ],
      },
      {
        title: "웹 접근성(WA) 품질 인증 및 정보 취약계층 대응",
        item: [
          "웹 접근성 품질인증 마크 갱신 및 유지보수 작업을 통해 정보취약계층을 포함한 모든 사용자의 금융 서비스 접근성 보장",
          "스크린 리더 최적화 및 키보드 접근성 등 표준 가이드라인 준수를 위한 정기적인 UI/UX 품질 검수 수행",
        ],
      },
      {
        title: "서비스 화면 개선",
        item: ["모바일 웹 상품몰 UI 개선 작업", "퇴직연금 서비스 UI 개선 작업"],
      },
    ],
    links: [
      {
        label: "하나은행 website",
        url: "https://www.kebhana.com/",
      },
    ],
  },
  {
    title: "하나은행 마이브랜치 UI/UX 운영",
    subTitle: "비대면 금융 채널 사용자 경험 최적화 및 디바이스 호환성 강화",
    info: {
      period: "2021.05 ~ 2025.01",
      skills: ["html", "css", "javascript"],
    },
    description: [
      {
        title: "비대면 브랜치 채널 운영 및 최적화",
        item: [
          "개인화된 금융 경험을 제공하는 마이브랜치 UI/UX 운영을 통해 사용자 경험 향상",
          "다양한 디바이스 환경을 고려한 반응형 웹 대응 및 크로스 브라우징 검수를 통한 일관된 사용자 경험 제공",
        ],
      },
    ],
    links: [
      {
        label: "하나은행 마이브랜치 소개",
        url: "https://www.kebhana.com/cont/mall/mall15/mall1501/index.jsp",
      },
    ],
  },
];

export default data;
