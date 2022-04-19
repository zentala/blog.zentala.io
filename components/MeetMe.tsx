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
        Hey, I am <strong>Paweł Żentała</strong>. <br/>

        Technology enthusiast and advocate of digitization.

        I deal with the systemic application of technology from a philosophical approach.
        in a wide context and in various dimensions.

        As an activist, I run a [group about Futures Studies](https://www.facebook.com/groups/futures.studies).

        I am a software engineer and manager with broad experience (online marketing, elearing, IoT, robotics).

        As a writer, I publish about modernization and digital transformation,
        sharing ideas about how we could improve our lives with technology.
      </p>
    </div>
  );
};

export default MeetMe;
