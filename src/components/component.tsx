"use client";

import { useCallback, useState } from "react";
import { useMbWallet } from "@mintbase-js/react";
import { Button } from "~/components/ui/button";

export function Component() {
  const {
    connect,
    disconnect,
    activeAccountId,
    selector,
    isConnected,
    errorMessage,
  } = useMbWallet();

  const [walletState, setWalletState] = useState();

  const handleClick = useCallback(async () => {
    if (isConnected) {
      const wallet = await selector.wallet();
      console.log(wallet);
    }
  }, [isConnected, selector]);

  return (
    <div className="mt-6 flex flex-col items-center justify-center space-y-4">
      <Button onClick={handleClick}>Show Wallet</Button>
      <p>{isConnected ? "Connected" : "Not connected"}</p>
      <p></p>
    </div>
  );
}
