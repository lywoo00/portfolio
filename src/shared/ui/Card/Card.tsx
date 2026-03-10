import { useState } from "react";
import { cn } from "@/shared/lib/utils"; // shared 레이어의 유틸리티 활용
import SkillBadge from "../Skill/SkillBadge";
import type { Project } from "../../../shared/types/project";
import Modal from "@/shared/ui/Modal";

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const styles = {
    container: cn(
      "group flex flex-col items-start p-5 md:p-8 bg-white rounded-2xl border border-slate-100",
      "shadow-lg/10 transition-all duration-300 hover:shadow-xl/10 hover:-translate-y-1"
    ),
    period: "text-xs font-bold text-blue-600 uppercase tracking-widest mb-1",
    title: "text-xl font-black text-slate-900 text-left",
    subTitle:
      "text-sm md:text-base mt-2 text-left text-neutral-500 font-medium leading-relaxed",
    detailBtn: "py-3 text-sm text-neutral-500 hover:underline cursor-pointer",

    skillFooter: "w-full pt-5 border-t border-slate-200",
    skillList: "flex flex-wrap gap-2",

    modalSection: "group/item mb-10 last:mb-0",
    modalHeading:
      "text-lg font-bold text-slate-900 mb-5 flex items-center gap-3",
    modalList:
      "space-y-2 pl-4 group-hover/item:border-blue-100 transition-colors",
    modalItem: "text-slate-600 text-[15px] leading-relaxed relative",
    modalBullet:
      "absolute left-[-18px] top-[10px] w-1.5 h-1.5 rounded-full bg-slate-200",
  };

  return (
    <>
      <div className={styles.container}>
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-start">
            <span className={styles.period}>{project.info.period}</span>
            <h3 className={styles.title}>{project.title}</h3>
          </div>
        </div>

        <p className={styles.subTitle}>{project.subTitle}</p>

        <button
          onClick={() => setIsModalOpen(true)}
          className={styles.detailBtn}
        >
          자세히 보기
        </button>

        <div className={styles.skillFooter}>
          <div className={styles.skillList}>
            {project.info.skills.map((skill: string) => (
              <SkillBadge key={skill} skill={skill} isActive={true} size="sm" />
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header
          title={project.title}
          subTitle={project.subTitle}
          info={project.info}
          links={project.links}
        />
        <Modal.Body>
          {project.description?.map((desc, idx) => (
            <div key={idx} className={styles.modalSection}>
              <h4 className={styles.modalHeading}>{desc.title}</h4>
              <ul className={styles.modalList}>
                {desc.item.map((bullet, i) => (
                  <li key={i} className={styles.modalItem}>
                    <span className={styles.modalBullet} />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-3">
                <img src={desc.images?.[0]} alt="" />
              </div>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Card;
