import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";
import logo from "../../../assets/images/headerImg/logo.png";
import { payment } from "../../../utils/consts/img";

interface IPayment {
  img: string;
}

const Footer: React.FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.footer__info}>
          <img src={logo} alt="Логотип" />
          <article>
            <h2 className={styles.footer__title}>ИНФОРМАЦИЯ</h2>
            <ul className={styles.footer__info_nav}>
              <li>
                <Link to="/about">О НАС</Link>
              </li>
              <li>
                <Link to="/delivery">ДОСТАВКА И ОПЛАТА</Link>
              </li>
              <li>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</li>
            </ul>
          </article>
          <article>
            <h2 className={styles.footer__title}>СЛУЖБА ПОДДЕРЖКИ</h2>
            <ul className={styles.footer__info_nav}>
              <li>КАРТА САЙТА</li>
              <li>ВОЗВРАТ ТОВАРА</li>
              <li>СВЯЗАТЬСЯ С НАМИ</li>
              <li>ДЛЯ СОТРУДНИЧЕСТВА</li>
            </ul>
          </article>
          <article>
            <h2 className={styles.footer__title}>ЛИЧНЫЙ КАБИНЕТ</h2>
            <ul className={styles.footer__info_nav}>
              <li>
                <Link to={`/user/${1}`}>ЛИЧНЫЙ КАБИНЕТ</Link>
              </li>
              <li>ИСТОРИЯ ЗАКАЗА</li>
              <li>
                <Link to="/favorite">ИЗБРАННЫЕ ТОВАРЫ</Link>
              </li>
              <li>
                <Link to="/news">СПИСОК НОВОСТЕЙ</Link>
              </li>
            </ul>
          </article>
          <article>
            <h2 className={styles.footer__title}>ДОПОЛНИТЕЛЬНО</h2>
            <ul className={styles.footer__info_nav}>
              <li>ПОДАРОЧНЫЕ</li>
              <li>СЕРТИФИКАТЫ</li>
              <li>АКЦИИ</li>
              <li>
                <Link to="/office">ЦВЕТЫ В ОФИС</Link>
              </li>
            </ul>
          </article>
        </section>
        <section className={styles.footer__payment}>
          <p>Copyright © 2021. Все права защищены</p>
          <article>
            <p>Способ оплаты:</p>
            <div>
              {payment.map((item: IPayment) => (
                <img key={item.img} src={item.img} alt="payment" />
              ))}
            </div>
          </article>
        </section>
      </footer>
    </>
  );
};

export default Footer;
