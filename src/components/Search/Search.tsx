import { FC } from 'react';
import styles from './Search.module.scss';

interface SearchProps {
  setSearch: (text: string) => void;
}

export const Search: FC<SearchProps> = ({ setSearch }) => {
  return (
    <form className={styles.searchForm}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search}
        placeholder="Type city / country"
      ></input>
    </form>
  );
};
