/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React, { useState } from "react";
import { Container, Button, Modal, ModalHeader, ModalBody } from "reactstrap";

// core components

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
            "url(" + require("assets/img/main-achtergrond.jpeg") + ")",
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
            {/* Replace the video source with your actual video file */}
            <video controls className="embed-responsive-item">
              <source
                src={require("assets/video/Smaakmakers-Promotie-Filmpje-v4-FINAL - Copy.mp4")}
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

