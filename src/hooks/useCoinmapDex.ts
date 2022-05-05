import { useCallback } from "react";
import { useCoinmapDexContract } from "./useContracts";

const useCoinmapDex = () => {
  const coinmap = useCoinmapDexContract();

  const cancelOrder = useCallback(
    async (maker, salt) => {
      try {
        return await coinmap?.cancelOrder(maker, salt)
      } catch (e) {
        console.error(e)
        return null
      }
    },
    [coinmap]
  )

  return { cancelOrder }
}

export default useCoinmapDex
