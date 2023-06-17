"use client";
import { Modal } from "@/components/ui/Modal/Modal";
import { useState } from "react";

export const NewCardButton = () => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal((state) => !state);
  };

  return (
    <>
      <button onClick={toggleModal}>Create New Card</button>

      <Modal isOpen={isModal} onClose={toggleModal}>
        <div style={{ backgroundColor: "#F9F9FA", width: 720, height: 500 }}>
          hello
        </div>
      </Modal>
    </>
  );
};
