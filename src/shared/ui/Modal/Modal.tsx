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
              className="bg-white w-full max-w-2xl overflow-y-auto rounded-3xl shadow-2xl flex flex-col"
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
  const githubLink = links.find((link) =>
    link.label.toLowerCase().includes("github")
  );
  // 라벨명에 'website'가 포함된 링크 찾기
  const siteLink = links.find((link) =>
    link.label.toLowerCase().includes("website")
  );
  return (
    <div className="relative p-5 pb-2 md:p-10 md:pb-5 border-b border-slate-100 bg-white">
      <div className="space-y-6 flex-1">
        <div>
          <span className="text-xs md:text-sm font-bold text-blue-600 uppercase tracking-widest block mb-2">
            {info.period}
          </span>
          <div className="flex items-center gap-4">
            <h2 className="text-xl md:text-3xl font-black text-slate-900 leading-tight">
              {title}
            </h2>
          </div>
          {subTitle && (
            <p className="text-sm md:text-xl text-slate-500 font-medium mt-2">
              {subTitle}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
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
      <div className="flex items-center gap-8 mt-7">
        {githubLink && (
          <a
            href={githubLink.url}
            target="_blank"
            className="relative text-sm text-neutral-500ver:text-blue-600 transition-colors duration-300 group"
          >
            깃허브 링크
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </a>
        )}
        {siteLink && (
          <a
            href={siteLink.url}
            target="_blank"
            className="relative text-sm text-neutral-500ver:text-blue-600 transition-colors duration-300 group"
          >
            사이트
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </a>
        )}
      </div>
      <button
        onClick={onClose}
        className="absolute right-5 top-5 p-2.5 text-slate-300"
      >
        <svg
          width="24"
          height="24"
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
  <div className="max-h-[40vh] md:max-h-[60vh]] p-5 md:p-10 flex-1 overflow-auto">
    <div className="space-y-8">{children}</div>
  </div>
);

Modal.Footer = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 bg-slate-50/50 border-t border-slate-50 flex justify-end gap-3">
    {children}
  </div>
);
