import Repo from '@/components/Repo';
import RepoDirs from '@/components/RepoDirs';
import Link from 'next/link';
import { FC, Suspense } from 'react';

interface RepoPageProps {}

const RepoPage: FC<RepoPageProps> = ({ params: { name } }: any) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
