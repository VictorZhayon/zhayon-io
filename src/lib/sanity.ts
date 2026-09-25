import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'cv8p392h',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});
