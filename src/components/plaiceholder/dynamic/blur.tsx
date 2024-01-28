import getBlurDataURL from '@/lib/blur-data-url';
import Image from 'next/image';

const ImageURL =
  'https://res.cloudinary.com/rsshonjoydas/image/upload/v1697038412/ai-companion/gmxv9z5myc8u4yzqw9hu.jpg';

export const PlaiceholderDynamicBlur = async () => {
  const myBlurDataUrl = await getBlurDataURL(ImageURL);

  return (
    <main className='grid min-h-screen place-content-center'>
      <h3 className='flex items-center justify-center mb-3'>
        Plaiceholder Dynamic Blur
      </h3>
      <div className='w-[400px] overflow-hidden rounded-2xl'>
        <Image
          src={ImageURL}
          alt='Coffee'
          width={4016}
          height={6016}
          sizes='400px'
          placeholder='blur'
          blurDataURL={myBlurDataUrl?.base64}
          priority
        />
      </div>
    </main>
  );
};
