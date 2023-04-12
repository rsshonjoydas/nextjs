import Link from 'next/link';
import { FC } from 'react';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>Redolence</Link>
        </div>

        <div className='links'>
          <Link href='/about'>About</Link>
          <Link href='/about/team'>Our Team</Link>
          <Link href='/code/repos'>Code</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
