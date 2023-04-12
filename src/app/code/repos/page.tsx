import { FC } from 'react';

interface ReposPageProps {}

const fetchRepos = async () => {
  const response = await fetch(
    'https://api.github.com/users/rsshonjoydas/repos'
  );
  const repos = await response.json();
  return repos;
};

const ReposPage: FC<ReposPageProps> = async () => {
  const repos = await fetchRepos();

  return <div>{repos[0].name}</div>;
};

export default ReposPage;
