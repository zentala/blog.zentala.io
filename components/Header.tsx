import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { GithubOutlined } from '@ant-design/icons';

import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='max-width-container'>
        <h2>
          <Link href='/'>
            <img src='/logo/logo7.png' style={{ maxHeight: 40, opacity: 0.8 }} />
            {/* <Image src="/logo/logo1.png" alt="me" height="64" layout='fill'/> */}
          </Link>
        </h2>
        <ul>
          <li>
            <Link href='/posts'>Blog</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <a
              href="https://github.com/zentala/blog.zentala.io"
              target="_blank"
              rel="noopener noreferrer">
                <GithubOutlined />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
