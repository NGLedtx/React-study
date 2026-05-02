const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-xl relative">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-black ">
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
export default Modal;
