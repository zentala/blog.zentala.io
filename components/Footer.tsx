import styles from '../styles/Footer.module.scss';
import { GithubOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='max-width-container'>
      <span>Copyright &copy; 2022 <a href='/'>Paweł Żentała</a></span>
        {/* <a
          href="https://github.com/zentala/blog.zentala.io"
          target="_blank"
          rel="noopener noreferrer">
            <GithubOutlined />
        </a>
        <span>Nothing else to add for now.</span> */}
      </div>
    </footer>
  );
};

export default Footer;

