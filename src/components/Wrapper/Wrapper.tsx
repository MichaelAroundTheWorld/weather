import { FC, PropsWithChildren } from 'react';
import styles from './Wrapper.module.scss';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <section className={styles.wrapper}>
          <div className={styles.card}>{children}</div>
        </section>
      </div>
    </div>
  );
};
