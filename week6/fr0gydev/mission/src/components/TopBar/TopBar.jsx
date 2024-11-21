import React from "react";
import styles from "./TopBar.module.css";

const TopBar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.backbutton}>{"<"}</div>
    </div>
  );
};

export default TopBar;
