import Layout from "../components/Layout.js";
import Head from "next/head";
import Header from "../components/Header.js";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactModal from "react-modal";
import Iframe from "react-iframe";

export default (props) => {
  var subtitle;

  const [modalOneIsOpen, setIsOpenOne] = React.useState(false);
  const [displayedDesc, setDisplayedDesc] = React.useState("");

  function openModalOne(Desc) {
    console.log(Desc);
    setIsOpenOne(true);
    setDisplayedDesc(Desc);
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

  return (
    <Layout>
      <ReactModal
        isOpen={modalOneIsOpen}
        closeTimeoutMS={500}
        onAfterOpen={afterOpenModal}
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
        <div style={{ padding: "50px" }}>
          <img
            src="/img/tracks/environmental.svg"
            style={{ height: "30vh", paddingBottom: "2vh" }}
          />
          <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Environmental</h1>
          <p>
            <strong>
              Focus on the intersection between technology and sustainability.
            </strong>
            {props.modaldesc}
          </p>
        </div>
      </ReactModal>

      <Head>
        <title>Ruby in Ghent - Schedule</title>
        <meta
          name="description"
          content="The schedule for Ruby in Ghent, a free, virtual coding evnet for Rubyists."
        />
      </Head>

      <Header
        headerText="Schedule"
        description="We code during the day and have fun in the evenings! We're planning on some board games, karaoke, and other fun socializing in the evenings."
      />

      <section className="schedule">
        <div className="container">
          <div className="body">
            <h1>Schedule</h1>
            <p>
              Here's a rough idea of what the schedule will look like. We'll
              have more details as we get closer to the event.
            </p>
            <Tabs>
              <TabList
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "2rem",
                  padding: "0",
                  listStyle: "none",
                }}
              >
                <Tab
                  style={{
                    padding: "0.75rem 1.5rem",
                    border: "2px solid #008080",
                    borderRadius: "8px",
                    background: "white",
                    color: "#008080",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                  }}
                  selectedClassName="selected"
                >
                  Monday
                </Tab>
                <Tab
                  style={{
                    padding: "0.75rem 1.5rem",
                    border: "2px solid #008080",
                    borderRadius: "8px",
                    background: "white",
                    color: "#008080",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                  }}
                  selectedClassName="selected"
                >
                  Tuesday
                </Tab>
                <Tab
                  style={{
                    padding: "0.75rem 1.5rem",
                    border: "2px solid #008080",
                    borderRadius: "8px",
                    background: "white",
                    color: "#008080",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                  }}
                  selectedClassName="selected"
                >
                  Wednesday
                </Tab>
              </TabList>

              <style jsx global>{`
                .react-tabs__tab:hover {
                  background: #e8f5ef !important;
                }
                .react-tabs__tab.selected {
                  background: #008080 !important;
                  color: white !important;
                }
              `}</style>

              <TabPanel>
                <h2>Monday</h2>
                <ul>
                  <li>
                    <strong>9:00-10:00am</strong> - Check In
                  </li>
                  <li>
                    <strong>10:00-11:00am</strong> - Team Formation and Setup
                    (note: we'll send out projects ahead of time so you can
                    clone down and get them running ahead of time)
                  </li>
                  <li>
                    <strong>11:00-12:00pm</strong> - Team Norming and Project
                    overviews by team leads
                  </li>
                  <li>
                    <strong>12:00-1:00pm</strong> - Lunch
                  </li>
                  <li>
                    <strong>1:00-5:30pm</strong> - Coding! We encourage pairing
                    and mobbing.
                  </li>
                  <li>
                    <strong>5:30-Late</strong> - Dinner, drinks, socializing!
                  </li>
                </ul>
              </TabPanel>
              <TabPanel>
                <h2>Tuesday</h2>
                <ul>
                  <li>
                    <strong>9:00am-12:pm</strong> - Coding
                  </li>
                  <li>
                    <strong>12:00-1:00pm</strong> - Lunch
                  </li>
                  <li>
                    <strong>1:00-5:30pm</strong> - Coding! We encourage pairing
                    and mobbing.
                  </li>
                  <li>
                    <strong>5:30-Late</strong> - Dinner, drinks, socializing!
                  </li>
                </ul>
              </TabPanel>
              <TabPanel>
                <h2>Wednesday</h2>
                <ul>
                  <li>
                    <strong>9:00 AM</strong> - Coding
                  </li>
                  <li>
                    <strong>12:00 PM</strong> - Lunch
                  </li>
                  <li>
                    <strong>1:00 PM</strong> - Coding
                  </li>
                  <li>
                    <strong>4:00 PM</strong> - Demos what we've accomplished (we'll have our stakeholders on a video call so they can see how we've helped them!)
                  </li>
                  <li>
                    <strong>5:30-Late</strong> - Dinner, drinks, socializing!
                  </li>
                </ul>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};
