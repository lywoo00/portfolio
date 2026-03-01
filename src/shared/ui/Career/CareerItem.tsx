import { useMemo, useState } from "react";
import { cn } from "@/shared/lib/utils"; // shared 레이어의 유틸리티 활용
import type { CAREER_DATA } from "../../constans/careerData";

type CareerItemType = (typeof CAREER_DATA)[number];

interface CareerItemProps {
  item: CareerItemType;
  defaultOpen?: boolean;
}

export const CareerItem = ({ item, defaultOpen = false }: CareerItemProps) => {
  const [open, setOpen] = useState(defaultOpen);

  const descriptions = useMemo(
    () => item.description.flatMap((group) => group.item),
    [item.description]
  );

  const styles = {
    container: cn(
      "group relative overflow-hidden rounded-2xl border bg-white",
      "px-5 py-5 sm:px-7 sm:py-6 transition-all duration-300",
      "border-slate-100 shadow-lg/5 hover:shadow-xl/5"
    ),
    badge:
      "inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1",
    badgeDot: "inline-block h-1.5 w-1.5 rounded-full bg-blue-600",
    badgeText: "text-xs font-medium tracking-wide text-blue-600",
    title:
      "mt-4 text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900",
    organization: "mt-2 text-sm text-neutral-500",

    toggleBtn: (isOpen: boolean) =>
      cn(
        "inline-flex shrink-0 items-center gap-2 self-start rounded-full",
        "border px-3.5 py-2 text-sm transition-all duration-300",
        isOpen
          ? "border-blue-100 bg-blue-50 text-blue-600 shadow-sm"
          : "border-neutral-200 bg-white text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
      ),

    contentWrapper: (isOpen: boolean) =>
      cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-[520px] opacity-100 mt-6" : "max-h-0 opacity-0"
      ),
    contentBox:
      "rounded-2xl border border-neutral-100 bg-neutral-50/70 p-4 sm:p-5",
    listItem: "flex items-start gap-3 text-sm leading-relaxed text-neutral-700",
    listDot: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600",
  };

  return (
    <article className={styles.container}>
      <div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span className={styles.badgeText}>{item.period}</span>
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.organization}>{item.organization}</p>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            className={styles.toggleBtn(open)}
          >
            <span>{open ? "주요 업무 닫기" : "주요 업무 보기"}</span>
            <svg
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                open && "rotate-180"
              )}
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

        <div className={styles.contentWrapper(open)}>
          <div className={styles.contentBox}>
            <ul className="space-y-3">
              {descriptions.map((desc, index) => (
                <li key={`${item.title}-${index}`} className={styles.listItem}>
                  <span className={styles.listDot} />
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
