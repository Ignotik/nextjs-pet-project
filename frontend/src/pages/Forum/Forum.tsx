import React from "react";
import { useLocationInUrl } from "../../hooks/useLocationInUrl";
import styles from "./Forum.module.scss";
import Location from "../../components/Location/Location";
const Forum: React.FC = () => {
  const title = useLocationInUrl();

  return (
    <section className={styles.wrapper}>
      <Location title={title} />
      <h2 className={styles.title}>Форум</h2>
      <p>
        Наша компания заботиться о&nbsp;каждом клиенте и&nbsp;старается
        постоянно усовершенствоваться. Поэтому согласно закона &laquo;Про защиту
        прав потребителя&raquo; если купленный товар вам не&nbsp;подошел
        по&nbsp;какой&nbsp;&mdash; то&nbsp;из&nbsp;причин, имеет заводские
        дефекты, Вы&nbsp;имеете право вернуть или обменять товар в&nbsp;течении
        14&nbsp;дней с&nbsp;момента его покупки.
      </p>
      <article className={styles.info}>
        <details>
          <summary>Как купить?</summary>
          <p>
            Вы можете заказать товар через сайт, после чего Вам позвонит наш
            менеджер и обсудит все детали заказа, или сделать заказ по одному из
            телефонов: (xxx) xxx-xx-xx, (xxx) xxx-xx-xx, время работы в будние
            дни с 9:00 до 18:00, суббота с 10:00 до 16:00,
          </p>
        </details>
        <details>
          <summary>Доставка и оплата</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            sapiente nihil cumque sequi aut consequuntur, fuga nobis eum ipsam
            aspernatur dolorem molestiae quidem? Sequi, accusantium. Saepe nulla
            numquam similique sit!
          </p>
        </details>
        <details>
          <summary>О нашем магазине</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            sapiente nihil cumque sequi aut consequuntur, fuga nobis eum ipsam
            aspernatur dolorem molestiae quidem? Sequi, accusantium. Saepe nulla
            numquam similique sit!
          </p>
        </details>
      </article>
      <p>
        Купить товар у нас Вы можете, позвоним по одному из наших телефонов или
        оформить товар купив его через наш магазин, после чего с Вами свяжется
        наш менеджер и обговорить все детали.
      </p>
    </section>
  );
};

export default Forum;
