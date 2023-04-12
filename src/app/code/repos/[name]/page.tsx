import { FC } from 'react';

interface RepoPageProps {}

const RepoPage: FC<RepoPageProps> = ({ params: { name } }: any) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>Repo Details</p>
    </div>
  );
};

export default RepoPage;
