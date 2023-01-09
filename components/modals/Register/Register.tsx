import Modal from "react-modal";

import { useState } from "react";

const Register: React.FC = () => {
  Modal.setAppElement("#__next");
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Modal onRequestClose={closeModal} isOpen={isOpen}>
      Modaaaaaaaaaaal
    </Modal>
  );
};

export default Register;
