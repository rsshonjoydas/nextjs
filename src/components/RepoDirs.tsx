import Link from 'next/link';

const fetchRepoContents = async (name: any) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/rsshonjoydas/${name}/contents`
  );

  const contents = await response.json();
  return contents;
};

const RepoDirs: any = async ({ name }: any) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content: any) => content.type === 'dir');

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: any) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
