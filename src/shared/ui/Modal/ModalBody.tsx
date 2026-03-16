export const ModalBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-h-[40vh] md:max-h-[60vh] p-5 md:p-10 flex-1 overflow-auto">
      <div className="space-y-8">{children}</div>
    </div>
  );
};
