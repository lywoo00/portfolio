export const data = [
  {
    title: `개발자 공방`,
    subTitle: `코드 영향도 분석 및 문서 작성 자동화 서비스 개발`,
    info: {
      period: "2026.01 ~ 2026.02",
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "n8n",
        "Gemini Pro",
      ],
    },
    description: [
      {
        title:
          "PR 기반 문서 생성 자동화 파이프라인 or GitHub PR 분석 · 문서 생성 워크플로우(n8n)",
        item: [
          "GitHub PR Webhook으로 n8n 워크플로우를 트리거하여 변경 파일, 리뷰 댓글 등을 수집하고 데이터를 평탄화 데이터 품질 유지",
          "전체 파일에서 import 패턴을 추출해 변경 파일 기준 의존성 맵 생성. 영향 범위를 카운트해 주의 파일을 분리하고 HTML 리포트로 시각화",
          "모호한 지시 대신 문서 종류 · 말투 · 글 구조 · 독자 타겟을 필터로 분리해 입력을 구조화. 옵션별 통과/실패 예시와 자기검증 체크리스트를 포함해 결과 편차를 줄였고, 모델 비교 테스트 후 Gemini 2.5 Pro로 정착",
        ],
      },
      {
        title: "컴파운드 컴포넌트 패턴 모달 구현",
        item: [
          "React Context API로 모달 상태를 전역 관리하고, createPortal로 z-index 문제를 원천 차단. 컴파운드 컴포넌트 패턴으로 Modal.Header · Modal.Body · Modal.Footer를 조립 방식으로 구성해 다양한 형태에 대응",
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
          "ESLint, Prettier와 Husky를 결합하여 코드 스타일을 강제하고, 커밋 전 자동 검증(lint-staged)을 통해 일관된 코드 품질 유지",
          "브랜치명 및 커밋 메시지 규칙(commitlint)을 적용하여 Git 워크플로우의 일관성 유지",
          "GitHub Actions 기반의 CI 파이프라인을 구축하여 PR 생성 시 빌드 안정성 및 타입 검사를 자동으로 수행하도록 설정",
        ],
      },
    ],
    link: { label: "개발자 공방", url: "https://dev-craft-lake.vercel.app/" },
  },
];
