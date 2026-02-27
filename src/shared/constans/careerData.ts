export const CAREER_DATA = [
  {
    title: "지아이티",
    organization: "차량 진단 웹 UI/UX 구축",
    period: "2025.08 ~ 2025.12",
    description: [
      {
        item: ["디자인을 리액트 컴포넌트 단위로 구현", "반응형 웹 UI/UX 구축"],
      },
    ],
  },
  {
    title: "하나은행",
    organization: "개인뱅킹 및 마이브랜치 UI/UX 운영",
    period: "2020.11 ~ 2025.04",
    description: [
      {
        item: [
          "공통 UI 컴포넌트 등록 및 배포",
          "웹 접근성 미준수 항목 개선 작업",
          "이벤트, 새소식 등 상시 컨텐츠 cms 등록 및 배포",
          "모바일웹 상품몰 개선",
          "퇴직연금 서비스 화면 개선",
        ],
      },
    ],
  },
] as const;

export type CareerDataItem = (typeof CAREER_DATA)[number];
