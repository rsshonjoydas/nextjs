import Courses from '@/components/Courses';
import { FC } from 'react';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <>
      <h1>Welcome To Redolence</h1>
      <Courses />
    </>
  );
};

export default HomePage;
