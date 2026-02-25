import { useMemo, useState } from "react";
import type { CAREER_DATA } from "../../constans/careerData";

type CareerItemType = (typeof CAREER_DATA)[number];

interface CareerItemProps {
  item: CareerItemType;
  defaultOpen?: boolean;
}

export const CareerItem2 = ({ item, defaultOpen = false }: CareerItemProps) => {
  const [open, setOpen] = useState(defaultOpen);

  const descriptions = useMemo(
    () => item.description.flatMap((group) => group.item),
    [item.description]
  );

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-[28px] border bg-white",
        "px-5 py-5 sm:px-7 sm:py-6",
        "transition-all duration-300",
        "border-neutral-200/80",
        "hover:border-neutral-300/90",
        "shadow-[0_1px_0_rgba(0,0,0,0.02),0_8px_30px_rgba(0,0,0,0.04)]",
        "hover:shadow-[0_1px_0_rgba(0,0,0,0.03),0_18px_40px_rgba(0,0,0,0.07)]",
      ].join(" ")}
    >
      {/* 왼쪽 세로라인 포인트 (회사명 라인 느낌) */}
      <div className="pointer-events-none absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full bg-neutral-200/70" />
      <div
        className={`pointer-events-none absolute left-0 top-5 w-[3px] rounded-r-full bg-blue-600 transition-all duration-500 ${
          open ? "h-[72px] opacity-100" : "h-8 opacity-70"
        }`}
      />

      <div className="pl-4 sm:pl-5">
        {/* 상단 */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            {/* period pill (blue-600 포인트) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-medium tracking-wide text-blue-600">
                {item.period}
              </span>
            </div>

            <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-neutral-500">{item.organization}</p>

            <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-neutral-700">
              {item.subTitle}
            </p>
          </div>

          {/* 토글 버튼 */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            className={[
              "inline-flex shrink-0 items-center gap-2 self-start rounded-full",
              "border px-3.5 py-2 text-sm transition-all duration-300",
              open
                ? "border-blue-100 bg-blue-50 text-blue-600 shadow-sm"
                : "border-neutral-200 bg-white text-neutral-500 hover:text-neutral-700 hover:border-neutral-300",
            ].join(" ")}
          >
            <span>{open ? item.hideLabel : "주요 업무 보기"}</span>

            <svg
              className={`h-4 w-4 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 9l6 6 6-6"
              />
            </svg>
          </button>
        </div>

        {/* 내용 */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-[520px] opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-neutral-100 bg-neutral-50/70 p-4 sm:p-5">
            <ul className="space-y-3">
              {descriptions.map((desc, index) => (
                <li
                  key={`${item.title}-${index}`}
                  className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};
