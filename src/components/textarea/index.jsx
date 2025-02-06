import React from "react";
import styles from "./style.module.scss";

function Textarea({ ...props }) {
  return <textarea className={styles.textarea} rows={4} {...props} />;
}

export { Textarea };
