import { cn } from "@/shared/lib/utils";

const MENU_ITEMS = [
  { id: "skills", label: "기술 스택" },
  { id: "career", label: "업무 경험" },
  { id: "projects", label: "프로젝트 상세" },
];

export const FloatingNav = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // 스타일 변수 분리
  const styles = {
    wrapper: "fixed bottom-10 left-1/2 -translate-x-1/2 z-40",
    nav: cn(
      "flex items-center gap-1 p-2 bg-white/80 backdrop-blur-md",
      "border border-slate-100 rounded-full shadow-lg shadow-slate-200/50"
    ),
    navItem: cn(
      "group relative px-4 py-2 text-sm font-bold transition-colors",
      "text-slate-400 hover:text-slate-900"
    ),
    label: "relative whitespace-nowrap",
    divider: "w-px h-4 bg-slate-200 mx-2",
    scrollTopBtn: "p-2 hover:bg-slate-50 rounded-full transition-colors",
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={styles.navItem}
          >
            <span className={styles.label}>{item.label}</span>
          </button>
        ))}

        <div className={styles.divider} />

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={styles.scrollTopBtn}
        >
          <img
            src="/images/chevron-up.svg"
            alt="Scroll to top"
            className="w-6 h-6"
          />
        </button>
      </nav>
    </div>
  );
};
