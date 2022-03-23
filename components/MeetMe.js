import Image from 'next/image';
import myPic from '../public/zentala.jpg'

const MeetMe = () => {
  return (
    <div style={{display: 'inline-flex', alignItems: 'center'}}>
      <Image
        src={myPic}
        alt='Pawel Zentala'
        width={150}
        height={150}
      />
      <p style={{ marginLeft: 20 }}>
        Hey, I am <strong>Pawel Zentala</strong>. <br/>
        Manager and Full-Stack Developer with wide experience (online marketing, business, IoT, robotics).
        I will publish about modernization and Digital Transformation.
      </p>
    </div>
  );
};

export default MeetMe;
