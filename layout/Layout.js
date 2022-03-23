import { Header, Footer, HeaderBanner } from '../components';
import "antd/dist/antd.css";

const Layout = ({ children }) => {

  return (
    <div>
      <HeaderBanner />
      <Header />
      <main className='max-width-container main'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
