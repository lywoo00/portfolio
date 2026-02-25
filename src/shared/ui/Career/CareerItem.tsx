import { useMemo, useState } from "react";
import type { CareerDataItem } from "../../../widgets/Career/career_data";

export const CareerItem = ({ item }: { item: CareerDataItem }) => {
  const [open, setOpen] = useState(false);

  // description: [{ item: string[] }][] -> string[] 로 펼침
  const descriptionList = useMemo(
    () => item.description.flatMap((group) => group.item),
    [item.description]
  );

  return (
    <div className="border-b border-neutral-200/80 py-12 px-6 rounded-2xl transition-all duration-300 hover:bg-neutral-50/40">
      <div className="flex justify-between items-start gap-6">
        <div className="min-w-0">
          {/* 포인트 컬러는 여기 1곳만 */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400" />
            <p className="text-sm text-neutral-400 tracking-wide">
              {item.period}
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-neutral-900 mt-3 tracking-tight">
            {item.title}
          </h3>

          <p className="text-neutral-500 text-sm mt-1">{item.organization}</p>

          <p className="text-neutral-700 text-sm mt-3 leading-relaxed">
            {item.subTitle}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className="shrink-0 flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-700 transition-colors duration-300"
        >
          <span>{open ? item.hideLabel : "주요 업무 보기"}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
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

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[600px] opacity-100 mt-8" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-xl bg-neutral-50/70 border border-neutral-100 px-4 py-4">
          <ul className="space-y-3 text-neutral-600 leading-relaxed text-sm">
            {descriptionList.map((desc, i) => (
              <li key={`${desc}-${i}`} className="flex gap-3">
                <span className="mt-[7px] w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
