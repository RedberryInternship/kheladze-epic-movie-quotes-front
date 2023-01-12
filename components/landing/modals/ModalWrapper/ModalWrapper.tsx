import React from "react";
import { Backdrop } from "components";

const ModalWrapper: React.FC<{
  closeModal: () => void;
  children: any;
  className?: string;
}> = ({ closeModal, children, className }) => {
  return (
    <>
      <div
        className={`${className} z-40 fixed bg-zinc-800 w-screen h-screen md:w-601 rounded-xl left-1/2 top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        {children}
      </div>
      <Backdrop click={closeModal} />
    </>
  );
};

export default ModalWrapper;
