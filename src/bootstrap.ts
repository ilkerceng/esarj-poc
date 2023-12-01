import { prefetchGetEnums } from './api/generated/esarj-api';
import { queryClient } from './queryClient';

export const callPrefetches = async () => {
  // The results of this query will be cached like a normal query
  await prefetchGetEnums(queryClient, {
    query: { gcTime: Infinity, staleTime: Infinity },
  });
};
