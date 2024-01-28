import DefaultBLur from '@/components/default-blur';
import { PlaiceholderBlur } from '@/components/plaiceholder/static/blur';
import { PlaiceholderColor } from '@/components/plaiceholder/static/color';

const Home = () => {
  return (
    <>
      <DefaultBLur />

      <PlaiceholderBlur />
      <PlaiceholderColor />
    </>
  );
};

export default Home;
