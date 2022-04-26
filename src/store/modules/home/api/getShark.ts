import { setOrderToken } from "..";

export default {
  query: (contract) => ({ url: `shark/${contract}` }),
  async onQueryStarted(
    arg,
    {
      dispatch,
      getState,
      extra,
      requestId,
      queryFulfilled,
      getCacheEntry,
      updateCachedData,
    }
  ) {
    queryFulfilled.then((r) => {
    })
  },
}