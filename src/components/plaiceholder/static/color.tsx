import Image from 'next/image';
import fs from 'node:fs/promises';

import { getPlaiceholder } from 'plaiceholder';

export const PlaiceholderColor = async () => {
  const buffer = await fs.readFile('./public/images/einstein.jpg');
  const { color } = await getPlaiceholder(buffer);

  return (
    <main className='grid min-h-screen place-content-center'>
      <h3 className='flex items-center justify-center mb-3'>
        Plaiceholder Static Color
      </h3>
      <div
        className='w-[400px] overflow-hidden rounded-2xl'
        style={{ backgroundColor: color.hex }}
      >
        <Image
          src='/images/einstein.jpg'
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
