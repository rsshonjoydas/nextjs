import Repo from '@/components/Repo';
import RepoDirs from '@/components/RepoDirs';
import Link from 'next/link';
import { FC } from 'react';

interface RepoPageProps {}

const RepoPage: FC<RepoPageProps> = ({ params: { name } }: any) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
      <Repo name={name} />
      <RepoDirs name={name} />
    </div>
  );
};

export default RepoPage;
