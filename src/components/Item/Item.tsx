import { FC } from 'react';
import styles from './Item.module.scss';

interface ItemProps {
  name: string;
  value?: string | number | string[];
  weather_icon?: string;
}

export const Item: FC<ItemProps> = ({ name, value, weather_icon }) => {
  return (
    <div className={styles.row}>
      <p>{name}:</p>
      <span>{value}</span>
      {weather_icon ? <img src={weather_icon} alt="description"></img> : null}
    </div>
  );
};
