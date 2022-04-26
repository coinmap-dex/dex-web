import { setOrderToken } from "..";

export default {
    query: (contract) => ({ url: `pool/${contract}` }),
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
          queryFulfilled.then((r)=>{
            const orderToken = (r?.data?.pools?.[0]?.name?.split('/'))?.[1];
            dispatch(setOrderToken(orderToken));
          })
      },
}