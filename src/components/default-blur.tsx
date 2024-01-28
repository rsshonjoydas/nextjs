import Image from 'next/image';

import Einstein from '../../public/images/einstein.jpg';

const DefaultBLur = () => {
  return (
    <main className='grid min-h-screen place-content-center'>
      <h3 className='flex items-center justify-center mb-3'>
        Default Static Image
      </h3>
      <div className='w-[400px] overflow-hidden rounded-2xl'>
        <Image
          src={Einstein}
          alt='Einstein'
          width={4016}
          height={6016}
          sizes='400px'
          placeholder='blur'
        />
      </div>
    </main>
  );
};

export default DefaultBLur;
