import { useState } from "react";
import { cn } from "@/shared/lib/utils"; // 이전에 만든 cn 유틸리티 활용
import SkillList from "../../shared/ui/Skill/SkillList";
import Title from "@/shared/ui/Title/Title";

const CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "frontend", label: "프론트엔드" },
  { id: "library", label: "라이브러리" },
  { id: "tool", label: "도구" },
  { id: "design", label: "디자인" },
] as const;

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const styles = {
    section:
      "section flex flex-col items-center justify-center py-16 px-6 bg-white",
    tabContainer:
      "flex gap-3 mb-12 p-1.5 bg-white rounded-full border border-gray-100 shadow-sm",
    tabButton: (isActive: boolean) =>
      cn(
        "px-2 py-1.5 md:px-5 rounded-full text-xs md:text-base font-medium transition-all",
        isActive
          ? "bg-white text-blue-600 shadow-sm ring-1 ring-black/5"
          : "text-gray-400 hover:text-gray-600"
      ),
  };

  return (
    <section id="skills" className={styles.section}>
      <Title title="기술 스택" description="아래 기술을 사용할 수 있습니다." />

      <div className={styles.tabContainer}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={styles.tabButton(activeCategory === cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <SkillList activeCategory={activeCategory} />
    </section>
  );
};

export default Skills;
