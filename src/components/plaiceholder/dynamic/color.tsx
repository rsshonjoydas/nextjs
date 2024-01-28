import Image from 'next/image';

import getBlurDataURL from '@/lib/blur-data-url';

const ImageURL =
  'https://res.cloudinary.com/rsshonjoydas/image/upload/v1697038412/ai-companion/gmxv9z5myc8u4yzqw9hu.jpg';

export const PlaiceholderDynamicColor = async () => {
  const myBlurDataUrl = await getBlurDataURL(ImageURL);

  return (
    <main className='grid min-h-screen place-content-center'>
      <h3 className='flex items-center justify-center mb-3'>
        Plaiceholder Dynamic Color
      </h3>
      <div
        className='w-[400px] overflow-hidden rounded-2xl'
        style={{ backgroundColor: myBlurDataUrl?.color.hex }}
      >
        <Image
          src={ImageURL}
          alt='Coffee'
          width={4016}
          height={6016}
          sizes='400px'
          priority
        />
      </div>
    </main>
  );
};
