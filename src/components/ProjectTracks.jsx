import { useEffect, useState } from "react";
import ReactModal from "react-modal";

const projects = [
  {
    title: "Foster Care",
    image: "casa",
    lead: "We'll be expanding our software that serves CASA (Court Appointed Special Advocates)",
    description:
      "which is a nationwide organization that transforms how foster children navigate the legal system. Their volunteers advocate for abused and neglected kids, ensuring their needs and best interests stay front and center in court proceedings.",
  },
  {
    title: "Animal Rescues",
    image: "homewardtails",
    lead: "We'll be working on our homeward tails project that supports animal rescues.",
    description:
      "Animal rescue organizations have become essential lifelines since the COVID-19 pandemic triggered both a surge in pet adoptions and, unfortunately, a wave of surrenders as families faced financial hardships. These organizations have adapted by developing virtual adoption processes, expanding foster networks, and providing pet food banks to help keep animals with their families during difficult times.",
  },
  {
    title: "Poverty",
    image: "essentials",
    lead: "We'll be contributing to human essentials.",
    description:
      "This project is helping over 3 million children and 500k period poverty sufferers. This project supports the thousands of nonprofits across north america who are providing essential items to those in need. The project endorsed by the Alliance for Period Supplies and the National Diaper Bank Network.",
  },
  {
    title: "Health",
    image: "medstick",
    lead: "We're developing software to support CMES (Continuing Medical Education on Stick),",
    description:
      "an innovative platform that delivers critical medical education content to healthcare practitioners in resource-challenged regions through USB drives and Raspberry Pi units. Our work will help expand access to essential continuing medical education for doctors, nurses, and other medical professionals who face barriers to traditional CME programs due to cost, location, or infrastructure limitations.",
  },
];

export default function ProjectTracks() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    ReactModal.setAppElement("#site");
  }, []);

  function openProject(project) {
    setActiveProject(project);
    setIsOpen(true);
  }

  return (
    <>
      <div className="track-grid">
        {projects.map((project) => (
          <button
            key={project.title}
            className="track"
            type="button"
            aria-haspopup="dialog"
            aria-label={`Learn about ${project.title}`}
            onClick={() => openProject(project)}
          >
            <img className="mb-3" src={`/img/tracks/${project.image}.svg`} alt="" />
            <h3>{project.title}</h3>
            <p>{project.lead} {project.description}</p>
          </button>
        ))}
      </div>
      <ReactModal
        isOpen={isOpen}
        closeTimeoutMS={500}
        onRequestClose={() => setIsOpen(false)}
        contentLabel={activeProject.title}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="modal-content">
          <button
            className="modal-close"
            type="button"
            aria-label="Close project details"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
          <img className="modal-image" src={`/img/tracks/${activeProject.image}.svg`} alt="" />
          <h1>{activeProject.title}</h1>
          <p><strong>{activeProject.lead}</strong> {activeProject.description}</p>
        </div>
      </ReactModal>
    </>
  );
}
