import { FC } from 'react';
import { Search } from '../Search/Search';
import { Button } from '../Button/Button';
import { Item } from '../Item/Item';
import styles from './Card.module.scss';

interface CardProps {
  setSearch: (text: string) => void;
  onClick: () => void;
  country?: string;
  city?: string;
  region?: string;
  temperature?: number;
  localtime?: string;
  weather_descriptions?: string[];
  weather_icons?: string;
}

export const Card: FC<CardProps> = ({
  setSearch,
  onClick,
  city,
  temperature,
  country,
  region,
  localtime,
  weather_descriptions,
  weather_icons,
}) => {
  return (
    <div className={styles.info}>
      <Search setSearch={setSearch} />
      <Item name="City" value={city} />
      <Item name="Country" value={country} />
      <Item name="Region" value={region} />
      <Item name="Local Time" value={localtime} />
      <Item name="Temperature" value={temperature} />
      <Item name="Weather description" value={weather_descriptions} weather_icon={weather_icons} />
      <Button onClick={onClick}>Search</Button>
    </div>
  );
};
