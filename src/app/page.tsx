'use client';

import Courses from '@/components/Courses';
import { FC, useEffect, useState } from 'react';
import LoadingPage from './loading';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome To Redolence</h1>
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
