import { useLoaderData } from 'react-router-dom';

export const AboutPage = () => {
  const data = useLoaderData() as string;

  return (
    <div>
      <h2>About</h2>
      <p>{data}</p>
    </div>
  );
};
