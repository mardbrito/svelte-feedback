import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'For sure, thank you for providing such great service!.',
  },
  {
    id: 2,
    rating: 9,
    text: 'Appreciate it. Can you email me the invoice?',
  },
]);
