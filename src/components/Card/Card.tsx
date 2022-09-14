import { FC } from 'react';
import { Search } from '../Search/Search';
import styles from './Card.module.scss';

export const Card: FC = () => {
  return (
    <div className={styles.info}>
      <Search />
      <div className={styles.row}>
        <p>City:</p>
        <span>Perm</span>
      </div>
    </div>
  );
};
