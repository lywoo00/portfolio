export const ModalFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-6 bg-slate-50/50 border-t border-slate-50 flex justify-end gap-3">
      {children}
    </div>
  );
};
