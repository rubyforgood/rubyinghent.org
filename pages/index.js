import Layout from "../components/Layout.js";
import Head from "next/head";
import Header from "../components/Header.js";
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

export default () => {
  var subtitle;

  const [modalOneIsOpen, setIsOpenOne] = React.useState(false);
  const [modalTwoIsOpen, setIsOpenTwo] = React.useState(false);
  const [modalThreeIsOpen, setIsOpenThree] = React.useState(false);
  const [modalFourIsOpen, setIsOpenFour] = React.useState(false);
  function openModalOne() {
    setIsOpenOne(true);
  }
  function openModalTwo() {
    setIsOpenTwo(true);
  }
  function openModalThree() {
    setIsOpenThree(true);
  }
  function openModalFour() {
    setIsOpenFour(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#388CF7";
    document.body.style.transition = "all 500ms ease-in-out";
  }

  function closeModalOne() {
    setIsOpenOne(false);
    document.body.style.backgroundColor = "initial";
  }
  function closeModalTwo() {
    setIsOpenTwo(false);
    document.body.style.backgroundColor = "initial";
  }
  function closeModalThree() {
    setIsOpenThree(false);
    document.body.style.backgroundColor = "initial";
  }
  function closeModalFour() {
    setIsOpenFour(false);
    document.body.style.backgroundColor = "initial";
  }

  return (
    <Layout>
      <Head>
        <title>Ruby for Good</title>
        <meta
          name="description"
          content="Ruby for Good is a code retreat where Ruby programmers (and others!) from all over the globe get together to build and contribute to projects that help our communities."
        />
      </Head>
      <ReactModal
        isOpen={modalOneIsOpen}
        onAfterOpen={afterOpenModal}
        closeTimeoutMS={500}
        onRequestClose={closeModalOne}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={closeModalOne}
            style={{
              border: "none",
              background: "none",
              fontSize: "30px",
              fontWeight: 200,
              color: "grey",
              marginTop: "-5px",
              marginLeft: "-5px",
            }}
          >
            &times;
          </button>
        </div>
        <div style={{ padding: "50px" }} className="modal-content">
          <img
            src="/img/tracks/casa.svg"
            style={{ height: "30vh", paddingBottom: "2vh" }}
          />

          <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Foster Care</h1>
          <p>
            <strong>
            We'll be expanding our software that serves CASA (Court Appointed Special Advocates)
            </strong>{" "}
                which is a nationwide organization that transforms how foster children navigate the 
                legal system. Their volunteers advocate for abused and 
                neglected kids, ensuring their needs and best interests stay front and center in 
                court proceedings.
          </p>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={modalTwoIsOpen}
        closeTimeoutMS={500}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModalTwo}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={closeModalTwo}
            style={{
              border: "none",
              background: "none",
              fontSize: "30px",
              fontWeight: 200,
              color: "grey",
              marginTop: "-5px",
              marginLeft: "-5px",
            }}
          >
            &times;
          </button>
        </div>
        <div style={{ padding: "50px" }} className="modal-content">
          <img
            src="/img/tracks/homewardtails.svg"
            style={{ height: "30vh", paddingBottom: "2vh" }}
          />
          <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Animal Rescues</h1>
          <p>
            <strong>
            We'll be working on our homeward tails project that supports animal rescues. {" "}
            </strong>
            Animal 
                rescue organizations have become essential lifelines since the COVID-19 pandemic 
                triggered both a surge in pet adoptions and, unfortunately, a wave of surrenders as 
                families faced financial hardships. These organizations have adapted by developing 
                virtual adoption processes, expanding foster networks, and providing pet food banks 
                to help keep animals with their families during difficult times.
          </p>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={modalThreeIsOpen}
        closeTimeoutMS={500}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModalThree}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={closeModalThree}
            style={{
              border: "none",
              background: "none",
              fontSize: "30px",
              fontWeight: 200,
              color: "grey",
              marginTop: "-5px",
              marginLeft: "-5px",
            }}
          >
            &times;
          </button>
        </div>
        <div style={{ padding: "50px" }} className="modal-content">
          <img
            src="/img/tracks/essentials.svg"
            style={{ height: "30vh", paddingBottom: "2vh" }}
          />
          <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Poverty</h1>
          <p>
            <strong>
              {" "}
              We'll be contributing to human essentials.
            </strong>{" "}
             This project is helping over 3 million children
                and 500k period poverty sufferers. This project supports the thousands of nonprofits across
                north america who are providing essential items to those in need. The project endorsed by the 
                Alliance for Period Supplies and the National Diaper Bank Network.
          </p>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={modalFourIsOpen}
        closeTimeoutMS={500}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModalFour}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={closeModalFour}
            style={{
              border: "none",
              background: "none",
              fontSize: "30px",
              fontWeight: 200,
              color: "grey",
              marginTop: "-5px",
              marginLeft: "-5px",
            }}
          >
            &times;
          </button>
        </div>
        <div style={{ padding: "50px" }} className="modal-content">
          <img
            src="/img/tracks/environmental.svg"
            style={{ height: "30vh", paddingBottom: "2vh" }}
          />
          <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Health</h1>
          <p>
            <strong>
            We're developing software to support CMES (Continuing Medical Education on Stick),
            </strong>
            {" "}
              an innovative platform that delivers critical medical education content to healthcare
               practitioners in resource-challenged regions through USB drives and Raspberry Pi 
               units. Our work will help expand access to essential continuing medical education 
               for doctors, nurses, and other medical professionals who face barriers to traditional
                CME programs due to cost, location, or infrastructure limitations.
          </p>
        </div>
      </ReactModal>

      <header>
        <div className="container">
          <div className="header-grid">
            <div>
              <h1>Ruby for Good - Belgium</h1>
              <h2>Ghent, Belgium</h2>
              <h2>Feb 2-4, 2026</h2>
              <h4 className="py-3">
                A code retreat where Ruby programmers (and others!) from all over the 
                globe get together to build and contribute to projects that help our 
                communities.
              </h4>
              <div className="cta-buttons">
                <a className="btn w-100 btn-outline-light" href="https://rubyforgood.org" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
                <a className="btn w-100 btn-light" href="https://ti.to/codeforgood/rubyinghent" target="_blank" rel="noopener noreferrer">
                  Register
                </a>
              </div>
            </div>
            <img src="/img/illustrations/header.svg" />
          </div>
        </div>
      </header>

      <Header
        headerText="About Ruby for Good"
        description="Our mission at Ruby for Good is to deliver specialized software development solutions to non-profit organizations to bolster their critical missions, build an inclusive technology community, and provide technology-focused educational opportunities to underserved communities. "
      />

      <section id="tracks-section" className="tracks">
        <div className="container">
          <h1>Focus Areas This Year</h1>
          <div className="track-grid">
            <div
              className="track"
              onClick={openModalOne}
              style={{ cursor: "pointer" }}
            >
              <img
                className="mb-3 full-image"
                src="/img/tracks/casa.svg"
                style={{ height: "55%" }}
              />
              <h3>Foster Care</h3>
              <p>
                We'll be expanding our software that serves CASA (Court Appointed Special Advocates) 
                which is a nationwide organization that transforms how foster children navigate the 
                legal system. Their volunteers advocate for abused and 
                neglected kids, ensuring their needs and best interests stay front and center in 
                court proceedings.</p>
            </div>
            <div
              className="track"
              onClick={openModalTwo}
              style={{ cursor: "pointer" }}
            >
              <img className="mb-3 half-image" src="/img/tracks/homewardtails.svg" />
              <h3>Animal Rescues</h3>
              <p>
                We'll be working on our homeward tails project that supports animal rescues. Animal 
                rescue organizations have become essential lifelines since the COVID-19 pandemic 
                triggered both a surge in pet adoptions and, unfortunately, a wave of surrenders as 
                families faced financial hardships. These organizations have adapted by developing 
                virtual adoption processes, expanding foster networks, and providing pet food banks 
                to help keep animals with their families during difficult times.
              </p>
            </div>
            <div
              className="track"
              onClick={openModalThree}
              style={{ cursor: "pointer" }}
            >
              <img
                className="mb-3 half-image"
                src="/img/tracks/essentials.svg"
              />
              <h3 style={{ margin: "-10px" }}>Poverty</h3>
              <p style={{ marginTop: "20px" }}>
                We'll be contributing to human essentials. This project is helping over 3 million children
                and 500k period poverty sufferers. This project supports the thousands of nonprofits across
                north america who are providing essential items to those in need. The project endorsed by the 
                Alliance for Period Supplies and the National Diaper Bank Network.
              </p>
            </div>
            <div
              className="track"
              onClick={openModalFour}
              style={{ cursor: "pointer" }}
            >
              <img
                className="mb-3 half-image"
                src="/img/tracks/medstick.svg"
              />
              <h3>Health</h3>
              <p>
              We're developing software to support CMES (Continuing Medical Education on Stick), 
              an innovative platform that delivers critical medical education content to healthcare
               practitioners in resource-challenged regions through USB drives and Raspberry Pi 
               units. Our work will help expand access to essential continuing medical education 
               for doctors, nurses, and other medical professionals who face barriers to traditional
                CME programs due to cost, location, or infrastructure limitations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="partnerships">
        <div className="container">
          <h1>Social Sector Partners</h1>
          <div className="partners-grid">
            <div className="partner p-5">
              <a href="https://techieswithoutborders.us" target="_blank">
                <img src="/img/logos/partners/twb.jpeg" />
              </a>
            </div>
            <div className="partner">
              <a href="https://homewardtails.org/" target="_blank">
                <img src="/img/logos/partners/hwts.png" />
              </a>
            </div>
            <div className="partner p-5">
              <a href="https://nationaldiaperbanknetwork.org" target="_blank">
                <img src="/img/logos/partners/ndbn.jpg" />
              </a>
            </div>
            <div className="partner">
              <a href="https://pgcasa.org" target="_blank">
                <img src="/img/logos/partners/casa.png" />
              </a>
            </div>
            <div className="partner">
              <a href="https://allianceforperiodsupplies.org" target="_blank">
                <img src="/img/logos/partners/aps.jpg" />
              </a>
            </div>
            <div className="partner p-2">
              <a href="https://flaredown.com/" target="_blank">
                <img src="/img/logos/partners/flaredown.png" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsors">
        <div className="container">
          <h1>Sponsors</h1>

          <div className="sponsors-grid">
          </div>
          <p>
            Interested in sponsoring us? {" "}
            <a
              href="mailto:info@rubyforgood.org"
            target="_blank"
            >
              Get In Touch!
            </a>
            !
          </p>
        </div>
      </section>
    </Layout>
  );
};
