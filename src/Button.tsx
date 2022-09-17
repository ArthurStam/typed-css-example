import { FC } from "react";
import * as styles from "./Button.module.css";

export const Button: FC = (props) => {
  return <button {...props} className={styles.button} />;
};
