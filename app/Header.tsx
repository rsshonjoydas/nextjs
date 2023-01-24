import Link from 'next/link';

const Header = () => {
  return (
    <header className='p-5 bg-blue-500'>
      <Link href='/' className='px-2 py-1 text-blue-500 bg-white rounded'>
        Home
      </Link>
    </header>
  );
};

export default Header;
