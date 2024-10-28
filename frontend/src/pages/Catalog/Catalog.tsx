import React from "react";
import styles from "./catalog.module.scss";
import { useLocationInUrl } from "../../hooks/useLocationInUrl";
import Location from "../../components/Location/Location";
import Aside from "../../components/Aside/Aside";
import Products from "../../components/Products/Products";

const Catalog: React.FC = () => {
  const title = useLocationInUrl();
  return (
    <section className={styles.wrapper}>
      <Location title={title} />
      <h2 className={styles.title}>Каталог товаров</h2>
      <article className={styles.catalog}>
        <Aside />
        <Products />
      </article>
    </section>
  );
};

export default Catalog;
