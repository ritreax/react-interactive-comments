import React from "react";
import styles from "./styles.module.scss";
import { clsx } from "clsx";

function Button({ variant = "ghost", className, children, ...props }) {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
