import React from "react";
import { Backdrop } from "components";
import { ModalWrapperProps } from "types";

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  closeModal,
  children,
  className,
}) => {
  return (
    <>
      <div
        className={`${className} z-40 fixed bg-zinc-800 md:w-601 rounded-xl left-1/2 top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        {children}
      </div>
      <Backdrop click={closeModal} />
    </>
  );
};

export default ModalWrapper;
