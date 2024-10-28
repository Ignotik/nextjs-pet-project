import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store/store";
import { fetchFlowers, url } from "../../redux/slices/flowerSlice";
import styles from "./Products.module.scss";
import btnflw from "../../assets/images/sharedImg/flower.png";
import { Link } from "react-router-dom";

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [limit] = useState(6);

  const flowers = useSelector((state: RootState) => state.flower.flowers);
  const status = useSelector((state: RootState) => state.flower.status);
  const error = useSelector((state: RootState) => state.flower.error);
  const count = useSelector((state: RootState) => state.flower.count);

  useEffect(() => {
    dispatch(fetchFlowers({ page, limit }));
  }, [dispatch, page, limit]);

  const totalPages = Math.ceil(count / limit);

  return (
    <div className={styles.wrapper}>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <div>
          <div className={styles.products}>
            {flowers.map((flower) => (
              <div className={styles.flower} key={flower.id}>
                <Link
                  to={`/flowers/${flower.id}`}
                  className={styles.flower__link}
                >
                  <img
                    className={styles.flower__img}
                    src={url + flower.img}
                    alt={flower.name}
                  />
                  <div className={styles.flower__info}>
                    <h2 className={styles.flower__title}>{flower.name}</h2>
                    <p className={styles.flower__price}>{flower.price} грн</p>
                  </div>
                  <p className={styles.flower__description}>
                    {flower.description}
                  </p>
                </Link>
                <button className={styles.flower__btn}>
                  <img
                    className={styles.flower__btn_img}
                    src={btnflw}
                    alt="Цветок"
                  />
                  Заказать
                </button>
              </div>
            ))}
          </div>
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={page === index + 1 ? styles.active : ""}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
