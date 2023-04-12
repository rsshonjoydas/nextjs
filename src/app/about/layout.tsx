import type { FC, ReactNode } from 'react';

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
