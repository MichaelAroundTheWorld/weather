import { FC } from 'react';
import styles from './Search.module.scss';

export const Search: FC = () => {
  return (
    <form className={styles.searchForm}>
      <input className={styles.search} placeholder="Type city / country"></input>
    </form>
  );
};
