import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./modal.css";
import { useNavigate } from "react-router-dom";

const ModalComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    navigate('/ThankYou')
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal okText={"confirm"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={559}>
        <div style={{ width: "100%", marginTop: "15px" }}>
          <img
            style={{ width: "100%" }}
            src="/assets/menWithDoor.svg"
            alt="menLogo"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <p className="title">Leaving so soon?</p>
            <p className="titleMain">
              You are about to exit the beckn experience!
            </p>
            <p className="titleMain"> Click on ‘Confirm’ to proceed</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
