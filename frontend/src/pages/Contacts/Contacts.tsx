import React from "react";
import { useLocationInUrl } from "../../hooks/useLocationInUrl";
import styles from "./Contacts.module.scss";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";
import { LuClock } from "react-icons/lu";
import Location from "../../components/Location/Location";
import flower from "../../assets/images/sharedImg/flower.png";
import Button from "../../components/Button/Button";
const Contacts: React.FC = () => {
  const title = useLocationInUrl();

  return (
    <section className={styles.wrapper}>
      <Location title={title} />
      <h2 className={styles.title}>Контакты</h2>
      <article className={styles.contacts}>
        <div className={styles.contacts__info}>
          <h2 className={styles.contacts__title}>Свяжитесь с нами</h2>
          <p className={styles.contacts__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <div className={styles.contacts__address}>
            <CiLocationOn />
            <span>м. Київ, вулиця Оболонська Набережна, 7, корпус 5</span>
          </div>
          <div className={styles.contacts__phone}>
            <span>
              <HiOutlinePhone />
            </span>
            +380 99 937 1556
          </div>
          <div className={styles.contacts__time}>
            <span>
              <LuClock />
            </span>
            <div>
              <p>Пн - Пт: 09:00 - 20:00</p>
              <p>Сб - Вс 09:00 - 15:00</p>
            </div>
          </div>
        </div>
        <form className={styles.contacts__form}>
          <fieldset>
            <legend>Ваше имя</legend>
            <input placeholder="Ваше имя" type="text" />
          </fieldset>
          <fieldset>
            <legend>E-mail адрес</legend>
            <input placeholder="Ваш e-mail" type="text" />
          </fieldset>
          <fieldset>
            <legend>Ваше сообщение</legend>
            <input placeholder="Ваше сообщение" type="text" />
          </fieldset>
          <Button img={flower} text="Отправить" />
        </form>
      </article>
    </section>
  );
};

export default Contacts;
