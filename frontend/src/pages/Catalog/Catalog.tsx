import React from "react";
import styles from "./catalog.module.scss";
import { useLocationInUrl } from "../../hooks/useLocationInUrl";
import Location from "../../components/Location/Location";

const Catalog: React.FC = () => {
  const title = useLocationInUrl();
  return (
    <section className={styles.wrapper}>
      <Location title={title} />
      <h2 className={styles.title}>Каталог товаров</h2>
    </section>
  );
};

export default Catalog;
