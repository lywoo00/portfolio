import SkillBadge from "./SkillBadge";

export const SKILL_DATA = [
  { id: "react", category: "publishing" },
  { id: "typescript", category: "publishing" },
  { id: "next.js", category: "publishing" },
  { id: "javascript", category: "publishing" },
  { id: "html", category: "publishing" },
  { id: "css", category: "publishing" },
  { id: "zustand", category: "library" },
  { id: "tailwind", category: "library" },
  { id: "tanstack-query", category: "library" },
  { id: "scss", category: "library" },
  { id: "git", category: "tool" },
  { id: "github", category: "tool" },
  { id: "vite", category: "tool" },
  { id: "supabase", category: "tool" },
  { id: "firebase", category: "tool" },
  { id: "n8n", category: "tool" },
  { id: "figma", category: "design" },
];

interface SkillListProps {
  activeCategory: string;
}

const SkillList = ({ activeCategory }: SkillListProps) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
      {SKILL_DATA.map((item) => (
        <SkillBadge
          key={item.id}
          skill={item.id}
          isActive={
            activeCategory === "all" || item.category === activeCategory
          }
        />
      ))}
    </div>
  );
};

export default SkillList;
