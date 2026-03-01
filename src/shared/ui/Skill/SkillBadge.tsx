import { cn } from "@/shared/lib/utils";

interface SkillBadgeProps {
  size?: "sm" | "md";
  skill: string;
  isActive: boolean;
}

const SkillBadge = ({ size = "md", skill, isActive }: SkillBadgeProps) => {
  const styles = {
    container: cn(
      "relative group/skill flex flex-col items-center transition-all duration-500", // 기본 공통 스타일
      isActive
        ? "opacity-100 scale-100 grayscale-0"
        : "opacity-20 scale-90 grayscale",
      size === "sm" ? "w-8 h-8" : "w-11 h-11 md:w-14 md:h-14"
    ),
    imageWrapper: "w-full h-full",
    image: "w-full h-full object-contain",
    tooltip: cn(
      "absolute -top-1 -translate-y-full left-1/2 -translate-x-1/2",
      "px-2 py-1 bg-gray-800 text-white rounded text-sm font-medium capitalize",
      "invisible z-10 shadow-lg group-hover/skill:visible transition-all"
    ),
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={`/images/${skill}.svg`}
          alt={skill}
          className={styles.image}
        />
      </div>

      <div className={styles.tooltip}>{skill}</div>
    </div>
  );
};

export default SkillBadge;
