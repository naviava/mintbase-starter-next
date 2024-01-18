"use client";

import { useCallback } from "react";
import { Button } from "~/components/ui/button";
import { useWallet } from "~/hooks/use-wallet";
import { execute, deployContract } from "@mintbase-js/sdk";

export function Component() {
  const {
    connect,
    disconnect,
    activeAccountId,
    selector,
    isConnected,
    errorMessage,
    wallet,
  } = useWallet();

  const handleClick = useCallback(async (): Promise<void> => {
    const deployArgs = deployContract({
      name: "Test Name",
      ownerId: "Owner ID",
      metadata: { symbol: "SYM" },
    });
    const result = await execute({ wallet }, deployArgs);
    console.log(result);
  }, [wallet]);

  return (
    <div className="text-balance mt-6 flex max-w-xl flex-col items-center justify-center space-y-4">
      <Button onClick={handleClick}>Show Wallet</Button>
      <p>{isConnected ? "Connected" : "Not connected"}</p>
      <p>Relevant message here</p>
    </div>
  );
}
