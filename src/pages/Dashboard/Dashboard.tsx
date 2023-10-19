import { useLoaderData } from 'react-router-dom';

export interface MessagesData {
  messages: string[];
}

export function DashboardIndex() {
  return (
    <div>
      <h2>Dashboard Index</h2>
    </div>
  );
}

export function DashboardMessages() {
  const { messages } = useLoaderData() as MessagesData;

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </div>
  );
}
