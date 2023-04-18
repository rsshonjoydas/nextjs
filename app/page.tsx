import { AuthRequiredError } from '../lib/exceptions';

const session = null;

const Home = () => {
  if (!session) throw new AuthRequiredError();

  return <div className='text-red-500'>Home Page</div>;
};

export default Home;
