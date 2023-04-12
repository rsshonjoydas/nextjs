import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Redolence | About',
  description: 'MERN Stack Web Developer',
  keywords:
    'Redolence, web developer, HTML, CSS, SASS, Tailwindcss, JavaScript, Typescript, ReactJS, NextJS, NodeJS, ExpressJS, MondoDB, Redis, Firebase and Docker',
};

interface AboutLayoutProps {
  children: ReactNode;
}

const AboutLayout: FC<AboutLayoutProps> = ({ children }) => (
  <>
    <h1>This is About Layout</h1>
    {children}
  </>
);

export default AboutLayout;
