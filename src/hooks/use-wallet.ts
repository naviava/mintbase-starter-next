import { useMbWallet } from "@mintbase-js/react";
import { useEffect } from "react";
import { useWalletStore } from "../store/use-wallet-store";

export function useWallet() {
  const { wallet, setWallet } = useWalletStore();

  const {
    connect,
    disconnect,
    activeAccountId,
    selector,
    isConnected,
    errorMessage,
  } = useMbWallet();

  useEffect(() => {
    async function getWallet() {
      if (isConnected) {
        const wallet = await selector.wallet();
        setWallet(wallet);
      }
    }
    getWallet();
  }, [isConnected, selector, setWallet]);

  return {
    connect,
    disconnect,
    activeAccountId,
    selector,
    isConnected,
    errorMessage,
    wallet,
    setWallet,
  };
}
