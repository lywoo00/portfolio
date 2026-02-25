import React, { createContext, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import SkillBadge from "@/shared/ui/Skill/SkillBadge";
import type { Project } from "@/shared/types/project";

interface ModalContextProps {
  onClose: () => void;
}
const ModalContext = createContext<ModalContextProps | null>(null);

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("Modal 서브 컴포넌트는 Modal 안에서만 사용 가능합니다.");
  return context;
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  // 모달 오픈 시 스크롤 방지 로직
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <ModalContext.Provider value={{ onClose }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-[2.5rem] shadow-2xl flex flex-col"
            >
              {children}
            </motion.div>
          </motion.div>
        </ModalContext.Provider>
      )}
    </AnimatePresence>,
    document.body
  );
};

Modal.Header = ({ title, subTitle, info, links }: Project) => {
  const { onClose } = useModal();

  // 링크 데이터 추출 로직
  const githubLink = links.find((link) =>
    link.label.toLowerCase().includes("github")
  );
  const siteLink = links.find((link) =>
    link.label.toLowerCase().includes("website")
  );

  return (
    <div className="p-10 bg-slate-50/50 flex justify-between items-start border-b border-white">
      <div className="flex flex-col gap-6 flex-1">
        {/* 상단 뱃지 라인 */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tighter">
              {info.period}
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[11px] font-bold text-blue-600 uppercase">
              Featured Project
            </span>
          </div>

          {/* 퀵 링크 아이콘 그룹 */}
          <div className="flex gap-2 ml-auto md:ml-0">
            {githubLink && (
              <a
                href={githubLink.url}
                target="_blank"
                className="p-2 bg-white rounded-xl border border-slate-200 text-slate-400 hover:text-slate-900 transition-all hover:shadow-md"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            )}
            {siteLink && (
              <a
                href={siteLink.url}
                target="_blank"
                className="p-2 bg-white rounded-xl border border-slate-200 text-slate-400 hover:text-blue-600 transition-all hover:shadow-md"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* 타이틀 영역 */}
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          {subTitle && (
            <p className="text-slate-400 font-medium text-sm mt-1">
              {subTitle}
            </p>
          )}
        </div>

        {/* 플로팅 스킬 박스 */}
        <div className="flex flex-wrap items-center gap-2.5 p-2 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-sm w-fit">
          {info.skills.map((skill) => (
            <SkillBadge
              key={skill}
              skill={skill.toLowerCase().replace(/[\s. ]/g, "")}
              isActive={true}
              size="sm"
            />
          ))}
        </div>
      </div>

      <button
        onClick={onClose}
        className="p-3 bg-white hover:bg-slate-900 hover:text-white rounded-2xl shadow-sm border border-slate-100 transition-all duration-300"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

Modal.Body = ({ children }: { children: React.ReactNode }) => (
  <div className="p-8 flex-1 overflow-y-auto bg-white">
    {/* 본문 그리드 스타일 적용 가능 */}
    <div className="space-y-10">{children}</div>
  </div>
);

Modal.Footer = ({ children }: { children: React.ReactNode }) => (
  <div className="p-8 bg-slate-50/50 border-t border-white flex justify-end gap-4">
    {children}
  </div>
);
