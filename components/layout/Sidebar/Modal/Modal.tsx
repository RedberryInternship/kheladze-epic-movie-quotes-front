import React from "react";
import { Backdrop } from "components";

const Modal: React.FC<{
  closeModal?: () => void;
  children: any;
  className?: string;
}> = ({ closeModal, children, className }) => {
  return (
    <>
      <div
        className={`${className} z-40 w-382 h-658 fixed bg-zinc-800 rounded-xl left-0 top-0`}
      >
        {children}
      </div>
      <Backdrop click={closeModal} />
    </>
  );
};

export default Modal;
