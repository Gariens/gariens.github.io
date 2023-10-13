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
import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

import samplePDF from "../assets/pdf/Menu-oktober-2.0.pdf"; // Import the PDF file


function CenterSection() {
    const [activeTab, setActiveTab] = React.useState("1");
  
    const toggle = (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    };
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
                    Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Mantelzorg
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <object data={samplePDF} type="application/pdf" width="100%" height="500">
                            This browser does not support PDFs. Please download the PDF to view it.
                        </object>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <h3 className="text-muted">Wij combineren horeca met een zinvolle daginvulling. Door te focussen op alles wat wél kanwij samen met thuiswonende mensen met dementie. Door te focussen op alles wat wél kan, bereiden en serveren wij samen de lekkerste gebakjes, lunchgerechten en natuurlijk koffie. bereid en geserveerd met de liefde, aandacht en hulp van mensen met dementie. e van diverse huisgemaakte en nostalgische gebakjes, lunch en natuurlijk koffie. je van huisgemaakt gebak, herkenbare Smaakmakers wordt een koffiecafé waar we naast heerlijke koffie en andere (warme) dranken, ook een kleine lunchkaart en huisgemaakte zoetigheden serveren. We gaan werken met herkenbare producten en recepten, een ode aan het ‘gewone’ broodje. Wij serveren werken wij samen met mensen met dementie. Wij combineren horeca met dagbesteding. Ons koffiecafé is een plek waar wij focussen op alles wat wél kan. Met duidelijke instructies, wat begeleiding en een speciale werkwijze serveren we samen de lekkerste lunchgerechten en natuurlijk goede koffie! Want wij dromen van een plek voor mensen met dementie, midden in de maatschappij</h3>
              <Button className="btn-round" href="mailto:info@bijsmaakmakers.nl" color="warning">
                Interesse? Mail ons
              </Button>
              <br/>
            </TabPane>
          </TabContent>
        </Container>
    </>
  );
};

export default CenterSection;
