import styles from '../styles/Footer.module.scss';
import { GithubOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='max-width-container'>

        <img
          src='/logo/logo7.png'
          style={{ maxHeight: 40, opacity: 0.8, height: 30 }}
        />

        <a
          href="https://github.com/zentala/blog.zentala.io"
          target="_blank"
          rel="noopener noreferrer">
            <GithubOutlined />
        </a>


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

