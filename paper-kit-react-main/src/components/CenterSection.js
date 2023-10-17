
import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Modal,
} from "reactstrap";

import svgImage1 from "assets/img/menu-1.svg"; // Import the first SVG image
import svgImage2 from "assets/img/menu-2.svg"; // Import the second SVG image

function CenterSection() {
  const [activeTab, setActiveTab] = useState("1");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSVG, setSelectedSVG] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const openImagePopup = (svg) => {
    setSelectedSVG(svg);
    setShowPopup(true);
  };

  const closeImagePopup = () => {
    setSelectedSVG(null);
    setShowPopup(false);
  };

// Use useEffect to check the screen size on component mount and window resize
useEffect(() => {
  function handleResize() {
    setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
  }

  handleResize(); // Check on component mount

  window.addEventListener("resize", handleResize); // Listen for window resize events

  return () => {
    window.removeEventListener("resize", handleResize); // Clean up event listener
  };
}, []);

  return (
    <>
      <Container>
        <div className="nav-tabs-navigation">
          <div className="nav-tabs-wrapper">
            <Nav role="tablist" tabs>
              <NavItem>
                <NavLink
                  className={activeTab === "1" ? "active" : ""}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  {isMobile ? <h6>Dagbesteding</h6> : <h2>Dagbesteding</h2>}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === "2" ? "active" : ""}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  {isMobile ? <h6>Menukaart</h6> : <h2>Menukaart</h2>}
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
        {/* Tab panes */}
        <TabContent className="following" activeTab={activeTab}>
          <TabPane className="text-center" tabId="1" id="follows">
            <h3 className="text-muted">Smaakmakers is een koffiecafé waar samen wordt gewerkt met thuiswonende mensen met dementie. Wij combineren horeca met dagbesteding. Het is een plek waar we focussen op alles wat wél kan. Met duidelijke instructies en begeleiding serveren we samen de lekkerste lunchgerechten en natuurlijk goede koffie!
              <br />
              <br />
              <h6 className="card-category">Voor wie?</h6>
              <br />
              Onze aandacht gaat uit naar thuiswonende mensen met dementie met behoefte aan een zinvolle daginvulling. Bij Smaakmakers kunt u of uw naaste terecht voor een of meerdere dagdelen (zinvolle) dagbesteding. Wij zijn van dinsdag t/m zaterdag geopend voor zowel horeca als dagbesteding. Financiering kan doormiddel van PGB, hiervoor is een indicatie vereist. Wij denken graag met u mee m.b.t. de aanvraag hiervan.
              <br />
              <br />
              Samen kijken we waar iemand bij kan en wil ondersteunen. Denk aan het snijden van de groenten, beleggen van broodjes, het uitserveren van eten en drinken of wat meer werkzaamheden 'achter de schermen' zoals het voorbereiden van bestekzakjes of to-go producten. Het is een kleine zaak met een ontspannen sfeer, waar iedereen wordt geprikkeld om zijn eigen kwaliteiten te laten zien.
              Als horecazaak zijn wij toegankelijk voor iedereen. Dit zorgt voor mooie ontmoetingen tussen gasten en deelnemers, diverse sociale prikkels op een dag en een sterk gevoel van nut en zingeving.
              Wilt u meer weten over de mogelijkheden voor dagbesteding bij Smaakmakers?
              <br />
              <br />
              Neem gerust contact op via onderstaande mail knop.
            </h3>
            <Button className="btn-round" href="mailto:info@bijsmaakmakers.nl" color="warning">
              Interesse? Mail ons
            </Button>
            <br />
          </TabPane>
          <TabPane tabId="2" id="following">
            <Row>
              <Col className="ml-auto mr-auto" md="15">
                <ul className="list-unstyled follows">
                  <li>
                    <Row>
                      <div className="image-container">
                        <img
                          src={svgImage1}
                          alt="Image 1"
                          onClick={() => openImagePopup(svgImage1)}
                          className="img-fluid"
                        />
                      </div>
                      <div className="image-container" style={{ marginLeft: "20px" }}>
                        <img
                          src={svgImage2}
                          alt="Image 2"
                          onClick={() => openImagePopup(svgImage2)}
                          className="img-fluid"
                        />
                      </div>
                    </Row>
                  </li>
                </ul>
                <Button className="btn-round" href="mailto:info@bijsmaakmakers.nl" color="warning">
                  Reserveren?
                  <br />
                  Mail ons!
                </Button>
              </Col>

            </Row>

          </TabPane>
        </TabContent>
      </Container>


      {/* Popup using Reactstrap Modal */}
      <Modal isOpen={showPopup} toggle={closeImagePopup}>
        <div className="image-popup">
          <div className="image-popup-content">
            <span
              className="close-popup"
              onClick={closeImagePopup}
              style={{ cursor: "pointer" }}
            >
              &times;
            </span>
            <img
              src={selectedSVG}
              alt="Selected Image"
              className="img-fluid"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default CenterSection;
