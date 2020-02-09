import React from "react";
import Modal from "react-awesome-modal";

const ModalProvider = ({ open, onClick, children }) => {
  return (
    <Modal visible={open} width="400" height="300" effect="fadeInUp">
      {children}
    </Modal>
  );
};

export default ModalProvider;
