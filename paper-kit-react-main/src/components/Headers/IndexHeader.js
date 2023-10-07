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
              <br />
              <Button 
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline onClick={toggleModal}
              >
                <i className="fa fa-play" />
                Impressie video
              </Button>
              
            </div>
          </Container>
        </div>
        <h6 className="category category-absolute">
          Melissa & Jolande
        </h6>
      </div>

      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        {/* <ModalHeader toggle={toggleModal}>Video Title</ModalHeader> */}
        <ModalBody>
          {/* Replace the video source with your actual video file */}
          <video controls width="100%">
            <source src={require("assets/video/Smaakmakers-CrowdaboutNow-campagne.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </ModalBody>
      </Modal>

      {/* Add custom CSS to style the modal background */}
      <style>
        {`
          .modal-content {
            background: rgba(0, 0, 0, 0.5); /* Adjust the opacity here */
          }
        `}
      </style>
    </>
  );
}

export default IndexHeader;

