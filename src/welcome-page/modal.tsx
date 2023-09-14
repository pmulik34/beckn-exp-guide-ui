import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import "./modal.css";
import { useNavigate } from "react-router-dom";
interface propsModal {
  flag: boolean;
  pathName?: string;
}
const ModalComponent: React.FC<propsModal> = ({
  flag,
  pathName,
}: propsModal) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsModalOpen(flag);
  }, []);

  const handleOk = () => {
    setIsModalOpen(!flag);
    navigate(pathName);
  };

  const handleCancel = () => {
    window.location.reload();
    setIsModalOpen(!flag);
  };

  return (
    <Modal
      mask={true}
      okText={"Confirm"}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width={559}
    >
      <div style={{ width: "100%", padding: "16px" }}>
        <img
          style={{ width: "100%" }}
          src="/assets/menWithDoor.svg"
          alt="menLogo"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <div>
          <p className="title">Leaving so soon?</p>
          <p className="titleMain">
            You are about to exit the beckn experience!
          </p>
          <p className="titleMain"> Click on ‘Confirm’ to proceed</p>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
