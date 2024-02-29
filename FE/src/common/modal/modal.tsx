import React, { useState } from "react";
import { Button, Modal } from "antd";

const App: React.FC = (props: any) => {
  const handleCancel = () => {
    props?.setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title={props?.title}
        open={props?.isModalOpen}
        onOk={handleCancel}
        onCancel={handleCancel}
        width={1000}
      >
        {props?.children}
      </Modal>
    </>
  );
};

export default App;
