
import React, { useEffect, useRef } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import CarouselComponent from "components/Carousel";

// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionDownload from "views/index-sections/SectionDownload.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []); // Properly close the useEffect with []
  
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="5">
                <h2 className="title">De Smaakmakers Visie</h2>
                <h5 className="description">
                  Smaakmakers is een koffiecafé in Eindhoven waar we samenwerken
                  met mensen met dementie. Een plek waar we focussen op alles
                  wat wél kan. Met duidelijke instructies, wat begeleiding en
                  een speciale werkwijze serveren we samen de lekkerste
                  lunchgerechten en natuurlijk goede koffie! Want wij
                  dromen van een plek voor mensen met dementie, midden in de
                  maatschappij.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                >
                  Meer info
                </Button>
              </Col>
              <Col className="ml-auto mr-auto" md="4">
               <CarouselComponent className="carousel" />
              </Col>
            </Row>
            <br />
            <br />
          </Container>
        </div>
      </div>
      <div className="main">
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Wie zijn we?</h2>
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Melissa.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Melissa de Laat</CardTitle>
                        <h6 className="card-category">Concept ontwikkelaar in de dementiezorg</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Als conceptontwikkelaar binnen de dementiezorg (Melissa)
                      en voormalig eigenaar van een eigen horecaonderneming
                      (Jolande), gaan wij deze uitdaging aan. Melissa:
                      ‘De afgelopen 4 jaar heb ik veel ervaring opgedaan wat
                      betreft koken met mensen met dementie en de effecten hiervan.
                      Als conceptontwikkelaar heb ik namelijk 4 jaar geleden het project
                      Groen & Grijs, kookworkshops voor grootouders met dementie
                      en hun kleinkinderen, ontwikkeld en uitgerold binnen de
                      regio midden-Brabant. De sfeer en het zichtbare effect
                      tijdens zo’n workshop toveren een glimlach op ieders gezicht.
                      De meest bijzondere effecten van samen koken? We focussen ons
                      automatisch op wat we samen allemaal nog wel kunnen. En het
                      verbetert de onderlinge relatie - van zorgen voor, naar
                      samenwerken. Na deze ervaringen smaakte het bij mij al heel
                      snel naar meer! Het begin van een droom. Een eigen plek,
                      waar we dagelijks samen koken en focussen op wat wel kan.’
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Jolande.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Jolande Verbakel</CardTitle>
                        <h6 className="card-category">Horeca ondernemer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      De horecaervaring en - achtergrond neemt Jolande mee naar Smaakmakers. Een perfect duo, al zeggen we het zelf. Niet alleen op zakelijk gebied en ambities, maar ook in de keuken. Beide zijn wij gek op koken, bakken, mensen ontvangen, gezelligheid en bovenal lekker eten. Melissa: ‘Van huis uit heb ik geleerd dat koffie, met gebak natuurlijk, mensen samenbrengt. Een momentje van rust of juist van samenkomen. Ik kan niet wachten om straks het team van Smaakmakers samen te laten komen met de buurt en de rest van Eindhoven of misschien wel Nederland?!’.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        
        <div className="section text-center">
          <Container>
            <Row>
              <Col md="6">
                <div id="menu" />
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-tile-56" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Menu</h4>
                    <br />
                    <p className="description">
                      Kom langs voor een aangeklede kop koffie en een heerlijke lunch.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      Bekijk het menu
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Midden in de maatschappij</h4>
                    <br />
                    <p>
                      Ons unieke koffiecafé is gelegen aan het edisonplein in Woensel-west in Eindhoven.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      Open navigatie
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="6">:
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-satisfied" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Mantelzorgers</h4>
                    <br />
                    <p>
                      Wilt u meer informatie over de dagbesteding bekijk
                      dan de volgende informatie pagina.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      Een dag bij smaakmakers
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
          <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Openingstijden</h2>
                <h5 className="description">
                Di t/ t/m Za van 09:30 - 16:00
                </h5>
                <br />
              </Col>
            </Row>
            <Col className="ml-auto mr-auto" md="4">
              <Button className="btn-fill" href="mailto:info@bijsmaakmakers.nl" color="danger" size="lg">
                Send Message
              </Button>
              <br />
              <br />
            </Col>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Contactgegevens</h2>
                <h5 className="description">
                Edisonplein 6a, 5621 HV Eindhoven 
                </h5>
                <br />
              </Col>
            </Row>
            <Col className="ml-auto mr-auto" md="4">
              <Button className="btn-fill" href="https://goo.gl/maps/AowUK7G7KKKMwma77" color="danger" size="lg">
                Navigate
              </Button>
            </Col>
          </Container>
          <Container>
          <br />
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.2551443390007!2d5.455193315768007!3d51.45347177962634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d9b0735b25bd%3A0x6eeb83adf42ba573!2sSmaakmakers%20Onvergetelijk%20Koffiecaf%C3%A9!5e0!3m2!1snl!2snl!4v1686088408025!5m2!1snl!2snl"
            width="100%" // Set the width to 100% for responsiveness
            height="450" // Set a specific height for mobile devices (adjust as needed)
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
        </div>
      </div>
      <SectionExamples />
      <DemoFooter />
    </>
  );
}

export default Index;
