import SkillBadge from "../Skill/SkillBadge";
import type { Project } from "../../../shared/types/project";
import { useState } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="group flex flex-col p-5 md:p-8 bg-white rounded-2xl border border-slate-100 shadow-lg/10 transition-all duration-300 hover:shadow-xl/10 hover:-translate-y-1"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col items-start">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
              {project.info.period}
            </span>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 text-left">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-left text-neutral-500 font-medium leading-relaxed">
          {project.subTitle}
        </p>

        <div className="pt-5 mt-5 border-t border-slate-200">
          <div className="flex flex-wrap gap-2">
            {project.info.skills.map((skill: string) => (
              <SkillBadge key={skill} skill={skill} isActive={true} size="sm" />
            ))}
          </div>
        </div>
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header
          title={project.title}
          subTitle={project.subTitle}
          info={project.info}
          links={project.links}
        />
        <Modal.Body>
          {project.description?.map((desc, idx) => (
            <div key={idx} className="group/item">
              <h4 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-3">
                {desc.title}
              </h4>
              <ul className="space-y-4 pl-4 group-hover/item:border-blue-100 transition-colors">
                {desc.item.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-slate-600 text-[15px] leading-relaxed relative"
                  >
                    <span className="absolute left-[-18px] top-[10px] w-1.5 h-1.5 rounded-full bg-slate-200" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Card;
