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
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }>
      <h3>
        <Link href={`/posts/${post.slug}`}>{post.data.title}</Link>
      </h3>
      <p style={{fontSize: '80%'}}>Published on {post.data.publishedOn}</p>
      <p>{post.data.excerpt}</p>
      <Link href={`/posts/${post.slug}`}>Read more</Link>
    </Card>
  );
};

export default PostItem;




