import Image from 'next/image';
import styles from '../styles/Home.module.css';
import myPic from '../public/zentala.jpg'

const MeetMe = () => {
  return (
    <div>
      <Image
        src={myPic}
        alt='Pawel Zentala'
        width={150}
        height={150}
        className={styles.img}
      />
      <p className={styles.p}>
        Hey, I am <strong>Pawel Zentala</strong>. Full stack developer with wide experience in IoT and robotics.
      </p>
    </div>
  );
};

export default MeetMe;
