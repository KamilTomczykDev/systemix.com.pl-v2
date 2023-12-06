import { createPortal } from "react-dom";

import { HiXMark } from "react-icons/hi2";

function Modal({ onClose, children }) {
  return createPortal(
    <div
      onClick={onClose}
      className="fixed left-0 top-0 z-50 h-screen w-full bg-backdrop-color backdrop-blur-xl"
    >
      <div className="fixed left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] items-center bg-white p-4 shadow-xl shadow-stone-700">
        <div className="absolute left-5 top-5 cursor-pointer rounded bg-stone-300 p-[0.1rem] hover:bg-stone-400">
          <HiXMark color="gray" size={25} onClick={onClose} />
        </div>

        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
