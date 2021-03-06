import styles from '../styles/Components.module.scss';

const Inset = ({ children }) => {
  return (
    <div style={{margin: '30px -50px 10px'}}>
        {children}
    </div>
  );
};

const Stage = ({ children }) => {
  return (
    <div className={styles.stage}>
        {children}
    </div>
  );
};


export { Inset, Stage as WIP };

export { default as Header } from "./Header";
export { default as Footer } from "./Footer";
export { default as MDXComponents } from "./MDXComponents";
export { default as MeetMe } from "./MeetMe";
export { default as Meta } from "./Meta";
export { default as PostItem } from "./PostItem";
export { default as Card } from "./Card";
export { default as HeaderBanner } from "./HeaderBanner";
export { default as EmbedSlider } from "./EmbedSlider";
export { default as Newsletter } from "./Newsletter";
export { default as Tags } from "./Tags";
export { default as SocialShare } from "./SocialShare";
