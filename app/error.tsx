'use client';

import Link from 'next/link';

const error = ({
  error,
  reset,
  statusCode,
}: {
  error: Error;
  reset: () => void;
  statusCode: number;
}) => {
  return (
    <div className='bg-gradient-to-r from-purple-300 to-blue-200'>
      <div className='flex items-center justify-center w-9/12 min-h-screen py-16 m-auto'>
        <div className='pb-8 overflow-hidden bg-white shadow sm:rounded-lg'>
          <div className='pt-8 text-center border-t border-gray-200'>
            <h1 className='font-bold text-primary-400 text-9xl'>
              {statusCode}
            </h1>
            <h1 className='py-8 text-3xl font-medium text-primary-500'>
              oops! {error.message}
            </h1>
            <button type='button' onClick={reset}>
              Try again
            </button>
            <p className='px-12 pb-8 text-2xl font-medium'>
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
            <span className='flex items-center justify-center gap-4'>
              <Link href='/'>
                <span className='link-btn link-btn-primary'>Go back home</span>
              </Link>
              <Link href='/support'>
                <span className='link-btn link-btn-secondary'>
                  Contact support
                </span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default error;
