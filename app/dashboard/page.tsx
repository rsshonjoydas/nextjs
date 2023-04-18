import { FC } from 'react';
import { AuthRequiredError } from '../../lib/exceptions';

interface pageProps {}

const page: FC<pageProps> = () => {
  throw new AuthRequiredError();

  return <div>page</div>;
};

export default page;
