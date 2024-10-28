import React, { useState } from "react";
import styles from "./Aside.module.scss";
import link from "../../assets/images/catalogImg/Vector.svg";

const filter = [
  { title: "Букеты", subFilters: ["Букет для дня рождения", "Букет из роз"] },
  {
    title: "Тюльпаны",
    subFilters: ["Тюльпан для свадьбы", "Тюльпан для дня рождения"],
  },
  { title: "Розы", subFilters: ["Розы на свадьбу", "Розы для любимой"] },
  { title: "Лилии", subFilters: ["Лилия для торжества"] },
  {
    title: "Подарки",
    subFilters: ["Подарок на день рождения", "Подарок для нее"],
  },
  { title: "Пионы", subFilters: ["Пионы на свадьбу"] },
];

const Aside: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeSubFilter, setActiveSubFilter] = useState<string | null>(null);

  const handleFilterClick = (title: string) => {
    setActiveFilter(activeFilter === title ? null : title);
    if (activeFilter !== title) {
      setActiveSubFilter(null);
    }
  };

  const handleSubFilterClick = (subFilter: string) => {
    setActiveSubFilter(activeSubFilter === subFilter ? null : subFilter);
  };

  return (
    <aside className={styles.aside}>
      {filter.map((item) => (
        <div key={item.title}>
          <div
            className={styles.aside__select}
            onClick={() => handleFilterClick(item.title)}
          >
            {item.title}
          </div>
          {activeFilter === item.title && (
            <div className={styles.aside__subFilters}>
              {item.subFilters.map((subFilter) => (
                <article className={styles.aside__subFilter_wrapper}>
                  <img src={link} alt="Галочка" />
                  <div
                    key={subFilter}
                    onClick={() => handleSubFilterClick(subFilter)}
                    className={`${styles.aside__subFilter} ${
                      activeSubFilter === subFilter ? styles.active : ""
                    }`}
                  >
                    {subFilter}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Aside;
