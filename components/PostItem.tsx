import Link from 'next/link';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
const PostItem = ({ post }) => {
  return (
    <Card
      cover={
        <img
          alt="example"
          src={post.data.thumb ? post.data.thumb : 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
        />
      }
      className='flex flex-col items-stretch'>
      <h3>
        <Link href={`/${post.slug}`}>{post.data.title}</Link>
      </h3>

      <p>{post.data.excerpt}</p>
      <div className='flex flex-grow'></div>
      <div className='flex self-end justify-between'>
        <p style={{fontSize: '80%'}} className='float-left '>Published on {post.data.publishedOn}</p>
        <p>{post.readingTime}</p>
        <Link href={`/${post.slug}`} className='float-right'><button>Read more</button></Link>
      </div>

    </Card>
  );
};

export default PostItem;




