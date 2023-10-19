import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from './layouts';
import { Home, NoMatch } from './pages';

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        async lazy() {
          const { aboutLoader, AboutPage } = await import('./pages');
          return { Component: AboutPage, loader: aboutLoader };
        },
        path: 'about',
      },
      {
        children: [
          {
            index: true,
            async lazy() {
              const { DashboardIndex } = await import('./pages');
              return { Component: DashboardIndex };
            },
          },
          {
            async lazy() {
              const { DashboardMessages, dashboardMessagesLoader } = await import('./pages');
              return {
                Component: DashboardMessages,
                loader: dashboardMessagesLoader,
              };
            },
            path: 'messages',
          },
        ],
        async lazy() {
          // Multiple routes in lazy file
          const { DashboardLayout } = await import('./layouts');
          return { Component: DashboardLayout };
        },
        path: 'dashboard',
      },
      {
        element: <NoMatch />,
        path: '*',
      },
    ],
    element: <Layout />,
    path: '/',
  },
]);

function App() {
  return <RouterProvider fallbackElement={<p>Loading...</p>} router={router} />;
}

export default App;
