import React, { useState } from "react";
import { Container, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import videoFile from "assets/video/Smaakmakers-Promotie-Film.mp4"; // Import the video file

function IndexHeader() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/main-page-tante-ellie.jpeg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1><strong>Voor een onvergetelijk kopje koffie.</strong></h1>           
            </div>
          </Container>
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        {/* <ModalHeader toggle={toggleModal}>Video Title</ModalHeader> */}
        <ModalBody>
          <div className="embed-responsive embed-responsive-16by9">
            <video controls className="embed-responsive-item">
              <source
                src={videoFile} // Use the imported video file
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </ModalBody>
      </Modal>

      <style>
        {`
          .modal-content {
            background: rgba(0, 0, 0, 0.5);
          }

          .embed-responsive {
            margin: 0 auto;
          }

          .embed-responsive video {
            width: 100%;
            height: auto;
          }
        `}
      </style>
    </>
  );
}

export default IndexHeader;
