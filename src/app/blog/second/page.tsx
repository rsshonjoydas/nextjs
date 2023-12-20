import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Blog',
  },
};

const SecondBlog = () => {
  return <div>SecondBlog</div>;
};

export default SecondBlog;
