import React from "react";
import styles from "./Address.module.scss";
import logo from "../../../assets/images/addressImg/logoAddress.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { PiSkypeLogo, PiTelegramLogoLight } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Address: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <article className={styles.address}>
        <div className={styles.address__info}>
          <img src={logo} alt="Логотип" />
          <div className={styles.address__info_nav}>
            <span>
              <CiPhone /> Телефон:
            </span>
            <p>+38 (063) 829 30 30</p>
            <p>+38 (067) 829 30 30</p>
            <span>
              <PiSkypeLogo /> Skype
            </span>
            <p>Flowers-Ukraine</p>
            <span>
              <MdOutlineEmail /> Почта:
            </span>
            <p>flowers.ukraine2014@gmail.com</p>
          </div>
          <div>
            <FaWhatsapp className={styles.address__social} />
            <FaInstagram className={styles.address__social} />
            <PiTelegramLogoLight className={styles.address__social} />
            <FiFacebook className={styles.address__social} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Address;
