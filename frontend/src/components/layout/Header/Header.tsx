import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../../assets/images/headerImg/logo.png";
import { MdFavoriteBorder } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { CiPhone } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.header__inner}>
          <article className={styles.header__info}>
            <div className={styles.header__nav}>
              <span>Валюта</span>
              <select name="currency">
                <option value="UA">Грн</option>
                <option value="Bel">Бел.Руб</option>
                <option value="Rus">Руб</option>
              </select>
            </div>
            <div className={styles.header__nav}>
              <span>Язык</span>
              <select name="language">
                <option value="RUS-rus">Рус</option>
                <option value="UA-ua">Укр</option>
                <option value="BEL-bel">Бел</option>
              </select>
            </div>
            <div className={styles.header__nav}>
              <span>Город</span>
              <select name="currency">
                <option value="Kiev">Киев</option>
                <option value="Minsk">Минск</option>
                <option value="Moscow">Москва</option>
              </select>
            </div>
            <div className={styles.header__nav}>
              <MdFavoriteBorder />
              <Link to="/favorite">Закладки</Link>
            </div>
            <div className={styles.header__nav}>
              <FiTruck />
              <Link to="delivery">Оплата и доставка</Link>
            </div>
            <div className={styles.header__nav}>
              <CiPhone />
              <Link to="contacts">Контакты</Link>
            </div>
          </article>
          <article className={styles.header__auth}>
            <LuUser2 />
            <Link className={styles.header__auth_enter} to="/login">
              Вход
            </Link>
            <Link className={styles.header__auth_reg} to="/register">
              Регистрация
            </Link>
          </article>
        </section>
      </header>
      <nav className={styles.nav}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.nav__logo} />
        </Link>
        <section className={styles.nav__inner}>
          <article className={styles.nav__search}>
            <select name="category">
              <option value="ForEvent">Для праздника</option>
              <option value="Gift">Подарок любимой</option>
            </select>
            <div className={styles.nav__input}>
              <input type="text" placeholder="Поиск по товарам" name="search" />
              <CiSearch className={styles.nav__icon} />
            </div>
          </article>
          <article className={styles.nav__menu}>
            <Link to="/catalog">Каталог</Link>
            <Link to="/forum">Форум</Link>
            <Link to="/reviews">Отзывы</Link>
            <Link to="/stocks">Акции</Link>
            <Link to="/news">Новости</Link>
            <Link to="/about">О нас</Link>
          </article>
        </section>
        <section className={styles.nav__contact}>
          <article>
            <FaWhatsapp className={styles.nav__contact_social} />
            <FaInstagram className={styles.nav__contact_social} />
            <PiTelegramLogoLight className={styles.nav__contact_social} />
            <FiFacebook className={styles.nav__contact_social} />
          </article>
          <p>+7 995 600 13 42</p>
          <article>
            <MdFavoriteBorder className={styles.nav__contact_fav} />
            <FiShoppingCart className={styles.nav__contact_cart} />
            <span>₴ {100 + 1900}</span>
          </article>
        </section>
      </nav>
    </>
  );
};

export default Header;
