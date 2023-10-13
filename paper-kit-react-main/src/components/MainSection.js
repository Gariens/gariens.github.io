import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
// core components

function MainSection() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="main" style={{ background: "#F2EFEB" }}>
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="5">
                <h2 className="title">Onvergetelijk?</h2>
                <h5 className="description">
                Bij Smaakmakers wordt jouw kopje koffie en gebakje bereid en geserveerd met de liefde, aandacht en hulp van mensen met dementie. Samen focussen wij op alles wat wél kan. Smaakt het naar meer?
                </h5>
                <br />
                <Button 
              className="btn-round mr-1 black-text"
              color="black"
              target="_blank"
              outline onClick={toggleModal}
              >
                <i className="fa fa-play" />
                Een kijkje in de keuken
              </Button>
              </Col>
              <Col className="ml-auto mr-auto" md="4">
               <SectionCarousel/>
              </Col>
            </Row>
            <br />
            <br />
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
                src={require("assets/video/Smaakmakers-Promotie-Film.mp4")}
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

export default MainSection;

