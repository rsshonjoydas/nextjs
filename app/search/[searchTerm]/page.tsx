type PageProps = {
  params: {
    searchTerm: string;
  };
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}/&api_key=${process.env.API_KEY}`
  );

  // throw new Error('Whoops something went wrong');

  const data = await res.json();
  return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
  const searchResults = await search(searchTerm);

  return <div>SearchResults</div>;
}

export default SearchResults;
