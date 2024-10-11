import React from "react";
import { Link } from "react-router-dom";
import styles from "./Location.module.scss";

const Location: React.FC<{ title: string }> = ({ title }) => {
  return (
    <article className={styles.routes}>
      <Link to="/" className={styles.routes__home}>
        Главная
      </Link>
      <span className={styles.routes__title}>{title}</span>
    </article>
  );
};

export default Location;
