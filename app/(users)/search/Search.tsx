'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearch('');

    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch} className='flex gap-2'>
      <input
        type='text'
        value={search}
        placeholder='Enter the search term'
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type='submit'
        className='px-4 font-bold text-white bg-blue-500 rounded-lg'
      >
        Search
      </button>
    </form>
  );
}

export default Search;
