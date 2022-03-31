import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import { useRef } from 'react';
import { FacebookEmbed, InstagramEmbed, LinkedInEmbed, TikTokEmbed, TwitterEmbed, YouTubeEmbed, PlaceholderEmbed } from 'react-social-media-embed';

type Props = {
  children: React.ReactNode
}

const InstagramEmbedSlider: React.FC<Props> = ({ children }) => {
  const styles = {
    // position: absolute;
    // left: 0;
    /* transform: translateX(-100%); */
    // width: '100%',
    // background: '#eee',
    // height: 600,
    // marginBottom: 600,
  }
  return (
    <div className='flex space-x-8 left-0 p-10' style={styles}>{/* overflow-x-scroll absolute */}
      {children}
    </div>
  )
}

export default InstagramEmbedSlider
