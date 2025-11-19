import styles from "../styles/modules/accordion.module.scss";
import { useState } from "react";

export default ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const extend = (e) => {
    const panel = e.target.closest(`.${styles.accordion}`).querySelector(`.${styles.panel}`);
    const accordion = e.target.closest(`.${styles.accordion}`);
    
    if (panel.style.maxHeight && panel.style.maxHeight !== "0px") {
      panel.style.maxHeight = null;
      accordion.classList.remove(styles.active);
      setIsOpen(false);
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      accordion.classList.add(styles.active);
      setIsOpen(true);
    }
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.active : ''}`}>
      <div onClick={extend}>
        <h4>{title}</h4>
      </div>
      <div className={styles.panel}>
        <p>{content}</p>
      </div>
    </div>
  );
};
