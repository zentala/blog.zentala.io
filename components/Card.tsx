import * as React from 'react'
import styles from '../styles/Card.module.css';

type Props = {
  href: string,
  title: string,
  desc: string
}

const Card: React.FC<Props> = ({ href, title, desc }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel="noreferrer"
      className={styles.card}
      >
        <h2>{title} &rarr;</h2>
        <p>{desc}</p>
    </a>
  );
};

export default Card;
