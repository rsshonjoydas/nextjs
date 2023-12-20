import Link from 'next/link';

import { Card } from '@/components/card';

const ArchivedNotifications = () => {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href='/complex-dashboard'>Default</Link>
    </Card>
  );
};

export default ArchivedNotifications;
