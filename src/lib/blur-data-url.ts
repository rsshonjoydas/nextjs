import { getPlaiceholder } from 'plaiceholder';

interface ImageInfo {
  base64: string;
  color: {
    r: number;
    g: number;
    b: number;
    hex: string;
  };
}

export default async function getImageInfo(
  imageUrl: string
): Promise<ImageInfo | undefined> {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64, color } = await getPlaiceholder(Buffer.from(buffer));

    return { base64, color };
  } catch (e) {
    if (e instanceof Error) console.error(e.stack);
    return undefined; // Explicitly returning undefined in case of an error
  }
}
