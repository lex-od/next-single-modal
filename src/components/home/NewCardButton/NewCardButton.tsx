"use client";
import { Modal } from "@/components/ui/Modal/Modal";
import { useState } from "react";
import { NewCardForm } from "../NewCardForm/NewCardForm";

export const NewCardButton = () => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal((state) => !state);
  };

  return (
    <>
      <button onClick={toggleModal}>Create New Card</button>

      <Modal isOpen={isModal} onClose={toggleModal}>
        <NewCardForm onClose={toggleModal} />
      </Modal>
    </>
  );
};
