import Link from 'next/link';

async function fetchCourse() {
  const response = await fetch('http://localhost:3000/api/courses');

  const courses = await response.json();
  return courses;
}

const Courses: any = async () => {
  const courses = await fetchCourse();

  return (
    <div className='courses'>
      {courses.map((course: any) => (
        <div key={course.id} className='card'>
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target='_blank' className='btn'>
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
