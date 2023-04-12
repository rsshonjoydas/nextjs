import Link from 'next/link';
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa';

interface ReposPageProps {}

const fetchRepos = async () => {
  const response = await fetch(
    'https://api.github.com/users/rsshonjoydas/repos'
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const repos = await response.json();
  return repos;
};

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className='repos-container'>
      <h2>Repositories</h2>
      <ul className='repo-list'>
        {repos.map((repo: any) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className='repo-details'>
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
