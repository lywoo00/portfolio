import { useState } from "react";
import { cn } from "@/shared/lib/utils";
import SkillBadge from "../Skill/SkillBadge";
import type { Project } from "../../../shared/types/project";
import Modal from "@/shared/ui/Modal";
import { p } from "framer-motion/client";

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

    deviceSection: "mt-6",
    deviceTitle:
      "text-base font-bold text-slate-500 uppercase tracking-wider mb-3",

    imageGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",

    imageFrame:
      "flex flex-col border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm",
    imageHeader:
      "bg-slate-50 px-3 py-2 border-b border-slate-200 flex items-center gap-1.5",

    macDot: "w-2.5 h-2.5 rounded-full bg-slate-300",

    scrollBox: "max-h-[400px] overflow-y-auto bg-slate-50",

    image: "w-full h-auto object-top block",
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

              {desc.images && (
                <>
                  {desc.images.pc && (
                    <div className={styles.deviceSection}>
                      {project.title === "지아이티" && (
                        <p className="text-blue-500">
                          * 프로젝트 일부 화면입니다.
                        </p>
                      )}
                      <p className={styles.deviceTitle}>PC </p>

                      <div className={styles.imageGrid}>
                        {desc.images.pc.map((img, i) => (
                          <div key={i} className={styles.imageFrame}>
                            <div className={styles.imageHeader}>
                              <span className={styles.macDot} />
                              <span className={styles.macDot} />
                              <span className={styles.macDot} />
                            </div>

                            <div className={styles.scrollBox}>
                              <img
                                src={img}
                                alt={`pc-${i}`}
                                className={styles.image}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {desc.images.tablet && (
                    <div className={styles.deviceSection}>
                      <p className={styles.deviceTitle}>Tablet</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {desc.images.tablet.map((img, i) => (
                          <div key={i} className={styles.imageFrame}>
                            <div className={styles.imageHeader}>
                              <span className={styles.macDot} />
                              <span className={styles.macDot} />
                              <span className={styles.macDot} />
                            </div>

                            <div className={styles.scrollBox}>
                              <img
                                src={img}
                                alt={`tablet-${i}`}
                                className={styles.image}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {desc.images.mobile && (
                    <div className={styles.deviceSection}>
                      <p className={styles.deviceTitle}>Mobile</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {desc.images.mobile.map((img, i) => (
                          <div key={i} className={styles.imageFrame}>
                            <div className={styles.imageHeader}>
                              <span className={styles.macDot} />
                              <span className={styles.macDot} />
                              <span className={styles.macDot} />
                            </div>

                            <div className={styles.scrollBox}>
                              <img
                                src={img}
                                alt={`mobile-${i}`}
                                className={styles.image}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Card;
