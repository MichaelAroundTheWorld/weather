import { FC } from 'react';
import mainImg from '../../assets/mainImg.jpg';
import styles from './LeftView.module.scss';

export const LeftView: FC = () => {
  return (
    <div className={styles.left}>
      <img src={mainImg} />
    </div>
  );
};
