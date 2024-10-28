// FlowerDetails.tsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store/store";
import { fetchFlowerById, url } from "../../redux/slices/flowerSlice";
import styles from "./FlowerDetails.module.scss";

const FlowerDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const flower = useSelector((state: RootState) =>
    state.flower.flowers.find((flower) => flower.id === Number(id))
  );
  const status = useSelector((state: RootState) => state.flower.status);
  const error = useSelector((state: RootState) => state.flower.error);

  useEffect(() => {
    if (!flower) {
      dispatch(fetchFlowerById(Number(id)));
    }
  }, [dispatch, id, flower]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  if (!flower) return <p>Цветок не найден.</p>;

  return (
    <div className={styles.flowerDetails}>
      <img
        src={url + flower.img}
        alt={flower.name}
        className={styles.flowerDetails__img}
      />
      <h2 className={styles.flowerDetails__title}>{flower.name}</h2>
      <p className={styles.flowerDetails__price}>{flower.price} грн</p>
      <p className={styles.flowerDetails__description}>{flower.description}</p>
    </div>
  );
};

export default FlowerDetails;
