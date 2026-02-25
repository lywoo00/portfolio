export const CAREER_DATA = [
  {
    title: "지아이티",
    organization: "글로벌 Company, 소프트웨어개발 Cell",
    subTitle: "리액트 기반 UI 컴포넌트 설계 및 퍼블리싱 (프리랜서)",
    period: "2025.08 ~ 2025.12",
    hideLabel: "주요 업무 내용 가리기",
    description: [
      {
        item: ["디자인을 리액트 컴포넌트 단위로 구조화하여 재사용성 향상"],
      },
    ],
  },
  {
    title: "하나은행",
    organization: "글로벌 Company, 소프트웨어개발 Cell",
    subTitle: "개인뱅킹 및 마이브랜치 UI/UX 운영",
    period: "2021.11 ~ 2025.04",
    hideLabel: "주요 업무 내용 가리기",
    description: [
      {
        item: [
          "공통 UI 컴포넌트 등록 및 배포",
          "웹 접근성 미준수 항목 개선 작업",
          "CMS 내에서 재사용 가능한 마크업 템플릿을 관리하여 컨텐츠 등록 효율성을 높이고 유지보수 시간을 단축",
        ],
      },
    ],
  },
] as const;

export type CareerDataItem = (typeof CAREER_DATA)[number];
