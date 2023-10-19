import { Link, Outlet, useNavigation } from 'react-router-dom';

import styles from './Layout.module.scss';

export const Layout = () => {
  const navigation = useNavigation();

  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.navigation}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard/messages">Messages (Dashboard)</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <h1 className={styles.title}>Vite template</h1>

      <p>
        This example demonstrates how to lazily load route definitions using{' '}
        <code>route.lazy()</code>. To get the full effect of this demo, be sure to open your Network
        tab and watch the new bundles load dynamically as you navigate around.
      </p>

      <p>
        The "About" and "Dashboard" pages are not loaded until you click on the link. When you do,
        the code is loaded via a dynamic <code>import()</code> statement during the{' '}
        <code>loading</code> phase of the navigation. Once the code loads, the route loader
        executes, and then the element renders with the loader-provided data.
      </p>

      <p>
        This works for all data-loading/rendering related properties of a route, including{' '}
        <code>action</code>, <code>loader</code>, <code>element</code>, <code>errorElement</code>,
        and <code>shouldRevalidate</code>. You cannot return path-matching properties from{' '}
        <code>lazy()</code> such as <code>path</code>, <code>index</code>, <code>children</code>,
        and <code>caseSensitive</code>.
      </p>

      {navigation.state !== 'idle' && (
        <div className={styles.loading}>
          {' '}
          <p>Navigation in progress...</p>
        </div>
      )}

      <Outlet />
    </div>
  );
};
