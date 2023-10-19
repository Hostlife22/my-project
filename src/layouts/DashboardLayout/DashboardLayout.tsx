import { Link, Outlet } from 'react-router-dom';

import styles from './DashboardLayout.module.scss';

export const DashboardLayout = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.navigation}>
          <li>
            <Link to="/dashboard">Dashboard Home</Link>
          </li>
          <li>
            <Link to="/dashboard/messages">Messages</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};
