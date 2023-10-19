import { MessagesData } from './Dashboard';

export async function dashboardMessagesLoader() {
  await new Promise((r) => setTimeout(r, 500));
  return {
    messages: [
      'Message 1 from Dashboard.tsx loader',
      'Message 2 from Dashboard.tsx loader',
      'Message 3 from Dashboard.tsx loader',
    ],
  } as MessagesData;
}
