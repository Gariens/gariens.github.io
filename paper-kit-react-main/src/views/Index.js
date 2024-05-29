
import React, { useEffect, useRef } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
//  Form,
//  Input,
//  InputGroupAddon,
//  InputGroupText,
//  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
//import DemoFooter from "components/Footers/DemoFooter.js";
//import PdfViewerModal from 'components/PdfViewerModal'; 
import MainSection from "components/MainSection";

// index sections
//import SectionButtons from "views/index-sections/SectionButtons.js";
//import SectionNavbars from "views/index-sections/SectionNavbars.js";
//import SectionNavigation from "views/index-sections/SectionNavigation.js";
//import SectionProgress from "views/index-sections/SectionProgress.js";
//import SectionNotifications from "views/index-sections/SectionNotifications.js";
//import SectionTypography from "views/index-sections/SectionTypography.js";
//import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
//import SectionCarousel from "views/index-sections/SectionCarousel.js";
//import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
//import SectionDark from "views/index-sections/SectionDark.js";
//import SectionLogin from "views/index-sections/SectionLogin.js";
//import SectionExamples from "views/index-sections/SectionExamples.js";
//import SectionDownload from "views/index-sections/SectionDownload.js";
import CenterSection from "components/CenterSection";
import { Helmet } from 'react-helmet';

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []); 

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "koffiecafe",
            "name": "Smaakmakers Onvergetelijk Koffiecafé, de zinvolle dagbesteding",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Edisonplein 6a",
              "addressLocality": "Eindhoven",
              "postalCode": "5621 HV",
              "addressCountry": "NL"
            },
            "description": "Zinvolle dagbesteding voor mensen met dementie in combinatie met koffie, gebak en lunch bij Smaakmakers Onvergetelijk Koffiecafé in Eindhoven.",
            "openingHours": "Tu-Sa 09:30-16:00",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.45347177962634,
              "longitude": 5.455193315768007
            }
          }
          `}
        </script>
      </Helmet>
      <IndexNavbar />
      <IndexHeader />
      <main className="main" style={{ background: "#F2EFEB" }}>
      <MainSection />
      </main>
           <CenterSection />
      <section className="main">
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
                    De horecaervaring en - achtergrond neemt Jolande mee naar Smaakmakers. Een perfect duo, al zeggen we het zelf. Niet alleen op zakelijk gebied en ambities, maar ook in de keuken. Beide zijn wij gek op koken, bakken, mensen ontvangen, gezelligheid en bovenal lekker eten. Van huis uit heb ik geleerd dat koffie, met gebak natuurlijk, mensen samenbrengt. Een momentje van rust of juist van samenkomen. Nu brengen wij het team van Smaakmakers samen  met de buurt en de rest van Eindhoven.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    
                  </CardFooter>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/me1.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Melissa de Laat</CardTitle>
                        <h6 className="card-category">Conceptontwikkelaar in de dementiezorg</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Als conceptontwikkelaar binnen de dementiezorg heb ik de afgelopen 5 jaar veel ervaring opgedaan wat betreft koken met mensen met dementie en de effecten hiervan. Als conceptontwikkelaar heb ik namelijk 5 jaar geleden het project Groen & Grijs, kookworkshops voor grootouders met dementie en hun kleinkinderen, ontwikkeld en uitgerold binnen de regio midden-Brabant. De sfeer en het zichtbare effect tijdens zo’n workshop toveren een glimlach op ieders gezicht. Daarnaast ben ik 3 jaar lang werkzaam geweest als zinvolle dagcoach op een PG-afdeling. Ook hier heb ik ervaren hoe belangrijk het is om een gevoel van nut te ervaren en onderdeel te blijven van onze maatschappij. Na deze ervaringen smaakte het bij mij al heel snel naar meer! Het begin van een droom. Een eigen plek, waar we dagelijks samen koken en focussen op wat wel kan. Van zorgen voor, naar samenwerken. Dat is wat wij bij Smaakmakers doen.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                  </CardFooter>
                </Card>
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
                di t/m za van 09:30 - 16:00
                </h5>
                <br />
              </Col>
            </Row>
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
              <Button className="btn-fill" href="https://goo.gl/maps/AowUK7G7KKKMwma77" color="warning" size="lg">
                Navigeren
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
      </section>
    </>
  );
}

export default Index;
