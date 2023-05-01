import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Main from '../components/main/main';

export default component$(() => {
  return (
    <>
      <Main />
    </>
  );
});

export const head: DocumentHead = {
  title: 'When did I last?',
  meta: [
    {
      name: 'When did I last?',
      content: 'An app to remind you when you last did a recurring thing like water plants or get a haircut',
    },
  ],
};
