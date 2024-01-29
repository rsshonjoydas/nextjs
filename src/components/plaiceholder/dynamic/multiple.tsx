import Image from 'next/image';
import Link from 'next/link';

import getBlurDataURL from '@/lib/blur-data-url';

const ImgURL = 'https://res.cloudinary.com/rsshonjoydas/image/upload';

const items = [
  {
    href: 'https://www.upwork.com/freelancers/~0136a8e165da09935b',
    src: `${ImgURL}/v1705406871/market-place/upwork.png`,
    alt: 'upwork',
    size: 70,
  },
  {
    href: 'https://www.fiverr.com/rsshonjoydas',
    src: `${ImgURL}/v1705406870/market-place/fiverr.png`,
    alt: 'fiverr',
    size: 90,
  },
  {
    href: 'https://www.freelancer.com/u/rsshonjoydas',
    src: `${ImgURL}/v1705406872/market-place/freelancer.png`,
    alt: 'freelancer',
    size: 80,
  },
] as const;

export const PlaiceholderMultipleDynamicBlur = async () => {
  // Fetch data for all items in the items array
  const blurDataUrls = await Promise.all(
    items.map(async (item) => ({
      href: item.href,
      src: item.src,
      blurDataUrl: await getBlurDataURL(item.src),
      alt: item.alt,
      size: item.size,
    }))
  );

  return (
    <main className='grid min-h-screen place-content-center'>
      <h3 className='flex items-center justify-center mb-3'>
        Plaiceholder Dynamic Blur
      </h3>
      <div className='grid grid-cols-3 gap-4'>
        {blurDataUrls.map((item, index) => (
          <Link
            key={item.alt}
            href={item.href}
            // href={items[index].href}
            target='_blank'
            className='overflow-hidden rounded-2xl'
          >
            <Image
              src={item.src}
              alt={items[index].alt}
              width={item.size}
              height={item.size}
              placeholder='blur'
              blurDataURL={item.blurDataUrl?.base64}
              priority
            />
          </Link>
        ))}
      </div>
    </main>
  );
};
