import { useCallback, useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { useErc20TokenContract, useCoinmapDexContract } from "./useContracts";
import useReadLocalStorage from "./useReadLocalStorage";
import {LOCAL_STORAGE} from '../constants/local-storage.constants';

const useToken = (address) => {
  const { account } = useWeb3React();
  const token = useErc20TokenContract(address);
  const coinmap = useCoinmapDexContract();

  const [isApproved, setApprove] = useState(false)
  const [balance, setBalance] = useState(0)
  const blocknumber = useReadLocalStorage(LOCAL_STORAGE.BLOCK_NUMBER)

  const fetchAllowance = useCallback(async () => {
    if (token) {
      const allowance = await token.allowance(account, coinmap?.address)
      setApprove(allowance.gt("1000000000000000000"));
    }
  }, [account, coinmap, token, blocknumber])

  useEffect(() => {
    fetchAllowance()
  }, [fetchAllowance, account, coinmap, token, blocknumber])

  const approve = useCallback(
    async () => {
      try {
        return await token?.approve(coinmap?.address, "1000000000000000000000000")
      } catch (e) {
        console.error(e)
        return null
      }
    },
    [coinmap, token]
  )

  const fetchBalance = useCallback(async () => {
    if (token) {
      const balance = await token.balanceOf(account)
      setBalance(balance.toString());
    }
  }, [account, token, blocknumber])

  useEffect(() => {
    fetchBalance()
  }, [fetchBalance, account, token, blocknumber])

  return { isApproved, balance, approve, blocknumber }
}

export default useToken