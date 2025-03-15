import { createPortal } from "react-dom";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="p-6 text-gray-200 fixed top-1/5 left-1/2 -translate-x-1/2 w-lg bg-slate-950 rounded-lg border-2 border-gray-300 shadow-lg">
      <h2 className="text-lg font-bold">Portal Modal</h2>
      <p className="mt-2">This modal is rendered using a portal.</p>
      <button type='button' onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
        Close
      </button>
    </div>,
    document.getElementById("root") // Append modal outside the normal React tree
  );
}