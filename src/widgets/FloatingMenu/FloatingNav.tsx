import { useState } from "react";
import { cn } from "@/shared/lib/utils";
import { motion, AnimatePresence } from "framer-motion"; // 이미 설치된 framer-motion 활용

const MENU_ITEMS = [
  { id: "skills", label: "기술 스택" },
  { id: "career", label: "업무 경험" },
  { id: "projects", label: "프로젝트" },
];

export const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const styles = {
    /* PC */
    wrapper:
      "fixed bottom-6 right-5 md:right-auto md:bottom-10 md:left-1/2 md:-translate-x-1/2 z-10",
    desktopNav: cn(
      "hidden md:flex items-center gap-1 p-2 bg-white/80 backdrop-blur-md",
      "border border-slate-100 rounded-full shadow-lg shadow-slate-200/50"
    ),
    desktopItem:
      "group relative px-4 py-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors",
    divider: "w-px h-4 bg-slate-200 mx-2",
    scrollTopBtn: "p-2 hover:bg-slate-50 rounded-full transition-colors",

    /* 모바일 */
    mobileWrapper: "flex md:hidden flex-col items-center",
    mobileMenuBox: cn(
      "absolute bottom-full right-0 mb-3 flex flex-col items-stretch gap-1 w-36",
      "bg-white/90 backdrop-blur-md p-2 border border-slate-100 rounded-2xl shadow-xl"
    ),
    mobileItem:
      "px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors text-center",
    mobileToggleBtn: cn(
      "flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-all duration-300",
      isOpen ? "bg-slate-100 text-slate-900" : "bg-slate-900 text-white"
    ),
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.desktopNav}>
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={styles.desktopItem}
          >
            <span className="relative whitespace-nowrap">{item.label}</span>
          </button>
        ))}
        <div className={styles.divider} />
        <button onClick={scrollToTop} className={styles.scrollTopBtn}>
          <img
            src="/images/chevron-up.svg"
            alt="Scroll to top"
            className="w-6 h-6"
          />
        </button>
      </nav>

      <div className={styles.mobileWrapper}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={styles.mobileMenuBox}
            >
              {MENU_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={styles.mobileItem}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-slate-100 my-1 mx-2" />
              <button onClick={scrollToTop} className={styles.mobileItem}>
                맨 위로
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 토글 버튼 */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.mobileToggleBtn}
        >
          <span className="text-sm font-bold block mt-0.5">
            {isOpen ? "닫기" : "메뉴"}
          </span>
        </button>
      </div>
    </div>
  );
};
