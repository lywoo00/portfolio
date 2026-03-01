import { createContext, useContext } from "react";

interface ModalContextProps {
  onClose: () => void;
}
export const ModalContext = createContext<ModalContextProps | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("Modal 서브 컴포넌트는 Modal 안에서만 사용 가능합니다.");
  return context;
};
