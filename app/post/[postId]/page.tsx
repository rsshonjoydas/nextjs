import { Metadata } from 'next';

interface PageProps {
  params: {
    postId: string;
  };
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = (await res.json()) as Post;
  return { title: data.title };
}

const PostPage = ({ params }: PageProps) => (
  <div>
    <h1>{params.postId}</h1>
  </div>
);

export default PostPage;
