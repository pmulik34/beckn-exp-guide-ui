import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import "./modal.css";
import { useNavigate } from "react-router-dom";
interface propsModal {
  flag: boolean,
}
const ModalComponent: React.FC<propsModal> = ({flag}: propsModal) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsModalOpen(flag);
  }, [])
  

  const handleOk = () => {
    setIsModalOpen(!flag);
    navigate('/')
  };

  const handleCancel = () => {
    window.location.reload()
    setIsModalOpen(!flag);
  };

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}

      <Modal mask={true} okText={"confirm"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={559}>
        <div style={{ width: "100%", marginTop: "15px" }}>
          <img
            style={{ width: "100%" }}
            src="/assets/menWithDoor.svg"
            alt="menLogo"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginBottom:"30px" }}>
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
