const MENU_ITEMS = [
  { id: "skills", label: "기술 스택" },
  { id: "career", label: "업무 경험" },
  { id: "projects", label: "프로젝트" },
];

export const FloatingNav = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40">
      <nav className="flex items-center gap-1 p-2 bg-white/80 backdrop-blur-md border border-slate-100 rounded-full shadow-lg shadow-slate-200/50">
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group relative px-4 py-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors"
          >
            <span className="relative whitespace-nowrap">{item.label}</span>
          </button>
        ))}

        <div className="w-px h-4 bg-slate-200 mx-2" />

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      </nav>
    </div>
  );
};
