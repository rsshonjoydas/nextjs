import DefaultBLur from '@/components/default-blur';
import { PlaiceholderDynamicBlur } from '@/components/plaiceholder/dynamic/blur';
import { PlaiceholderDynamicColor } from '@/components/plaiceholder/dynamic/color';
import { PlaiceholderBlur } from '@/components/plaiceholder/static/blur';
import { PlaiceholderColor } from '@/components/plaiceholder/static/color';

const Home = () => {
  return (
    <>
      <DefaultBLur />

      <PlaiceholderBlur />
      <PlaiceholderColor />

      <PlaiceholderDynamicBlur />
      <PlaiceholderDynamicColor />
    </>
  );
};

export default Home;
