"use client";
import { ModalCreditCards, Typography } from "@/src/components";
import React, { useState } from "react";

const InvestmentsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <>
      <Typography onClick={handleOpenModal}>see all</Typography>
      {isModalOpen && <ModalCreditCards onClose={handleCloseModal} />};
    </>
  );
};

export default InvestmentsPage;
