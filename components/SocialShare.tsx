// https://www.npmjs.com/package/next-share
// TODO
import {
  FacebookShareButton, FacebookIcon,
  RedditShareButton, RedditIcon,
  TelegramShareButton, TelegramIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon,
  LinkedinShareButton, LinkedinIcon,
  WorkplaceShareButton, WorkplaceIcon,
  PocketShareButton, PocketIcon,
  FacebookMessengerShareButton, FacebookMessengerIcon,
  EmailShareButton, EmailIcon,
} from 'next-share';

const SocialShare: React.FC  = () => {

  const Facebook = (
    <FacebookShareButton
      url={'https://github.com/next-share'}
      quote={'next-share is a social share buttons for your next React apps.'}
      hashtag={'#nextshare'}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  )

  const Reddit = (
    <RedditShareButton
      url={'https://github.com/next-share'}
      title={'next-share is a social share buttons for your next React apps.'}
    >
      <RedditIcon size={32} round />
    </RedditShareButton>
  )

  const Telegram = (
    <TelegramShareButton
      url={'https://github.com/next-share'}
      title={'next-share is a social share buttons for your next React apps.'}
    >
      <TelegramIcon size={32} round />
    </TelegramShareButton>
 )

  const Twitter = (
    <TwitterShareButton
      url={'https://github.com/next-share'}
      title={'next-share is a social share buttons for your next React apps.'}
    >
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  )

  const Whatsapp = (
    <WhatsappShareButton
      url={'https://github.com/next-share'}
      title={'next-share is a social share buttons for your next React apps.'}
      separator=":: "
    >
      <WhatsappIcon size={32} round />
    </WhatsappShareButton>
  )

  const Linkedin = (
    <LinkedinShareButton url={'https://github.com/next-share'}>
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
  )

  const Workspace = (
    <WorkplaceShareButton
      url={'https://github.com/next-share'}
      quote={'Next Share'}
    >
      <WorkplaceIcon size={32} round />
    </WorkplaceShareButton>
  )

  const Pocket = (
    <PocketShareButton
      url={'https://github.com/next-share'}
      title={'Next Share'}
    >
      <PocketIcon size={32} round />
    </PocketShareButton>
  )

  const Messenger = (
    <FacebookMessengerShareButton
      url={'https://github.com/next-share'}
      appId={''}
    >
      <FacebookMessengerIcon size={32} round />
    </FacebookMessengerShareButton>
  )

  const Email = (
    <EmailShareButton
      url={'https://github.com/next-share'}
      subject={'Next Share'}
      body="body"
    >
      <EmailIcon size={32} round />
    </EmailShareButton>
  )

  const shareArticleButtons = [Facebook, Reddit, Telegram, Twitter, Whatsapp, Linkedin, Workspace, Pocket, Messenger, Email];
  // I can add 'shareImageButtons' or to add other media, like Pinterest or Instagram, and swich SocialShare post type with arugment

  return (
    <div style={{position: "fixed", marginLeft: -60}}>
      {shareArticleButtons.map((shareButton, index) => (
        <div key={index}>{shareButton}</div>
      ))}
    </div>
  );
};

export default SocialShare;
