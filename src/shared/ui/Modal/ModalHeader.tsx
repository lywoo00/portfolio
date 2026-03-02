import { useModal } from "./ModalContext";
import SkillBadge from "@/shared/ui/Skill/SkillBadge";
import type { Project } from "@/shared/types/project";

export const ModalHeader = ({ title, subTitle, info, links }: Project) => {
  const { onClose } = useModal();

  const styles = {
    header:
      "relative p-5 pb-2 md:p-10 md:pb-5 border-b border-slate-100 bg-white",
    period:
      "text-xs md:text-sm font-bold text-blue-600 uppercase tracking-widest block mb-2",
    title: "text-xl md:text-3xl font-black text-slate-900 leading-tight",
    subTitle: "text-sm md:text-lg text-slate-500 font-medium mt-2",
    link: "relative text-sm text-neutral-500 hover:text-blue-600 transition-colors duration-300 group",
    linkUnderline:
      "absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full",
    closeBtn:
      "absolute right-5 top-5 p-2.5 text-slate-300 hover:text-slate-500 transition-colors",
  };

  return (
    <div className={styles.header}>
      <div className="space-y-6 flex-1">
        <div>
          <span className={styles.period}>{info.period}</span>
          <h2 className={styles.title}>{title}</h2>
          {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
        </div>
        <div className="flex flex-wrap gap-2">
          {info.skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} isActive={true} size="sm" />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-8 mt-7">
        {links?.map(
          (link, i) =>
            link && (
              <a
                key={i}
                href={link.url}
                target="_blank"
                className={styles.link}
              >
                {link.label.toLowerCase().includes("github")
                  ? "깃허브 링크"
                  : "웹 사이트"}
                <span className={styles.linkUnderline} />
              </a>
            )
        )}
      </div>
      <button onClick={onClose} className={styles.closeBtn}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};
