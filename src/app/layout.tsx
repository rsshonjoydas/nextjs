import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Redolence',
  description: 'MERN Stack Web Developer',
  keywords:
    'Redolence, web developer, HTML, CSS, SASS, Tailwindcss, JavaScript, Typescript, ReactJS, NextJS, NodeJS, ExpressJS, MondoDB, Redis, Firebase and Docker',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
