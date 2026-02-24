import { useState } from "react";
import SkillList from "../../shared/ui/Skill/SkillList";

const CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "frontend", label: "프론트엔드" },
  { id: "tool", label: "도구" },
  { id: "design", label: "디자인" },
] as const;

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section className="flex flex-col items-center justify-center p-16 bg-white">
      <h2 className="text-2xl font-bold mb-10">기술 스택 및 도구</h2>

      <div className="flex gap-3 mb-12 p-1.5 bg-gray-50 rounded-full border border-gray-100">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? "bg-white text-blue-600 shadow-sm ring-1 ring-black/5"
                : "text-gray-400 hover:text-gray-600"
            }`}
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
