import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  img: string;
  text: string;
};

const Button: React.FC<ButtonProps> = ({ img, text }) => {
  return (
    <button className={styles.button}>
      {text}
      <img src={img} alt={img} />
    </button>
  );
};

export default Button;
