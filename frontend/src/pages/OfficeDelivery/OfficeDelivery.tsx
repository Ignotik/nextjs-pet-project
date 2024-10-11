import React from "react";
import { useLocationInUrl } from "../../hooks/useLocationInUrl";
import styles from "./OfficeDelivery.module.scss";
import Location from "../../components/Location/Location";

const OfficeDelivery: React.FC = () => {
  const title = useLocationInUrl();

  return (
    <section className={styles.wrapper}>
      <Location title={title} />
      <h2 className={styles.title}>Доставка цветов в офис</h2>
      <article className={styles.partners}>
        <p>Уважаемые партнеры!</p>
        <p>
          Станьте корпоративным клиентом и&nbsp;получите самые выгодные
          предложения на&nbsp;все заказы от&nbsp;компании Flowers Ukraine.{" "}
        </p>
      </article>
      <h2 className={styles.subtitle}>
        Преимущества для наших корпоративных клиентов:
      </h2>
      <ul className={styles.list}>
        <li>Скидки на заказы от 10% до 30% (в зависимости от суммы заказа)</li>
        <li>Разработка предложений под Ваш бюджет</li>
        <li>Оперативная доставка по Москве и Московской области</li>
        <li>Возможность безналичной оплаты</li>
        <li>Предоставление всех необходимых бухгалтерских документов</li>
        <li>Индивидуальный менеджер</li>
        <li>
          Специальные предложения и акции к праздникам (Новый год, 8 Марта, 14
          Февраля, 23 Февраля, 9 Мая, 1 Сентября и т.д.)
        </li>
      </ul>
      <h2 className={styles.subtitle}>
        Контакты Отдела по работе с корпоративными клиентами:
      </h2>
      <article className={styles.contacts}>
        <p>
          Руководитель отдела:
          <span> Александр</span>
        </p>
        <p>
          Телефон:
          <span> +38 (067) 829 30 30; +38 (063) 829 30 30;</span>
        </p>
        <p>
          E-mail:
          <span> flowers.ukraine2014@gmail.com</span>
        </p>
      </article>
    </section>
  );
};

export default OfficeDelivery;
