import React from "react";
import { useLocationInUrl } from "../../hooks/useLocationInUrl";
import styles from "./Delivery.module.scss";
import { paymentNew } from "../../utils/consts/img";
import Contract from "../../components/Contract/Contract";
import Location from "../../components/Location/Location";

interface IPayment {
  img: string;
}

const Delivery: React.FC = () => {
  const title = useLocationInUrl();

  return (
    <section className={styles.wrapper}>
      <Location title={title} />
      <h2 className={styles.title}>Оплата и доставка</h2>
      <article>
        <p>
          Flowers-Ukraine.com&nbsp;&mdash; это единая сеть партнеров, курьерская
          доставка цветов, что гарантирует доставку букетов и&nbsp;подарков
          по&nbsp;всей Украине вовремя и&nbsp;в&nbsp;надлежащем виде. Доставка
          цветов по&nbsp;украине осуществляется в&nbsp;удобное для Вас время.
        </p>
        <p>
          Цветы и&nbsp;корзины фруктов&nbsp;&mdash; это скоропортящийся продукт,
          поэтому компания оставляет за&nbsp;собой право изменения состава
          и&nbsp;внешнего вида товара на&nbsp;20-25% с&nbsp;сохранением общего
          вида и&nbsp;стоимости компонентов.
        </p>
        <p>
          Доставка цветов в&nbsp;областные центры Украины&nbsp;&mdash;
          от&nbsp;100 грн За&nbsp;ранние (с&nbsp;7&nbsp;до&nbsp;9)
          и&nbsp;вечерние (с&nbsp;21&nbsp;до&nbsp;23) временные промежутки
          доставки доплата составляет 50грн.
        </p>
        <p className={styles.city}>
          В&nbsp;крупных городах: Киев, Днепропетровск, Одесса, Донецк, Харьков
        </p>
        <ul className={styles.list}>
          <li>
            доставка осуществляется бесплатно при заказе от&nbsp;800&nbsp;грн;
          </li>
          <li>
            при заказе менее 800 грн доставка оплачивается отдельно
            и&nbsp;составляет 100&nbsp;грн.
          </li>
        </ul>
        <p>
          Доставка цветов по&nbsp;районным цетрам и&nbsp;поселкам
          от&nbsp;160&nbsp;грн, более подробно уточнять у&nbsp;менеджера.
        </p>
        <p>
          При высокой загруженности дорог время доставки гарантировать
          невозможно. Надеемся на&nbsp;Ваше понимание!
        </p>
        <p>
          Доставка заказов оплаченных после 18:00 по&nbsp;киевскому времени, при
          условии ранней доставки на&nbsp;следующий день, может быть перенесена
          на&nbsp;более позднее время по&nbsp;согласованию с&nbsp;заказчиком.
        </p>
        <p>Вы&nbsp;можете оплатить товар:</p>
      </article>
      <article className={styles.payment}>
        {paymentNew.map((item: IPayment) => (
          <img key={item.img} src={item.img} alt="payment" />
        ))}
      </article>
      <article>
        <p>
          &laquo;Приват24&raquo;&nbsp;&mdash; самый популярный Интернет-банк
          Украины.
          <br /> Наличными оплата производится предварительно перед фактом
          доставки наличными курьеру. Стоимость услуги выезда курьера составляет
          20&nbsp;грн. Оплата карточкой Visa/MasterCard В&nbsp;нашем
          магазине&nbsp;Вы можете оплатить заказ при помощи платежной
          (пластиковой) карты.Сервис проведения платежей обеспечивается
          Межбанковской системой электронной доставки и&nbsp;оплаты счетов
          Portmone.com с&nbsp;использованием современного и&nbsp;безопасного
          механизма авторизации платежных карт. Реквизиты платежных карт
          вводятся на&nbsp;сайте Portmone.com в&nbsp;защищенном режиме,
          и&nbsp;недоступны сотрудникам. Яндекс.Деньги После оплаты, пожалуйста
          напишите нам email с&nbsp;суммой проплаты и&nbsp;номером Вашего
          заказа. А&nbsp;также укажите эту информацию при переводе.
        </p>
        <p>Мы&nbsp;работаем по&nbsp;всей Украине!</p>
      </article>
      <h2 className={styles.subtitle}>Договор-оферта интернет-магазина</h2>
      <Contract />
    </section>
  );
};

export default Delivery;
