import { Backdrop } from "components";

import { motion } from "framer-motion";
const Modal: React.FC<{
  closeModal?: () => void;
  children: any;
  className?: string;
}> = ({ closeModal, children, className }) => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 382 }}
        transition={{ duration: 0.3 }}
        className={`${className} z-40 w-382 h-658 fixed bg-zinc-800 rounded-xl left-0 top-0`}
      >
        {children}
      </motion.div>
      <Backdrop click={closeModal} />
    </>
  );
};

export default Modal;
