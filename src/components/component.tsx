"use client";

import { useCallback, useState } from "react";
import { Button } from "~/components/ui/button";
import { useWallet } from "~/hooks/use-wallet";
import { execute, deployContract } from "@mintbase-js/sdk";
import { uploadReference } from "@mintbase-js/storage";
import { Loader } from "lucide-react";

export function Component() {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const {
    connect,
    disconnect,
    activeAccountId,
    selector,
    isConnected,
    errorMessage,
    wallet,
  } = useWallet();

  const handleSubmit = useCallback(
    async (e: any): Promise<void> => {
      setIsLoading(true);
      try {
        e.preventDefault();
        if (!file) return;
        //call storage method to upload file to arweave
        const metadata = {
          title: "Storage Guide",
          media: file,
        };
        const uploadResult = await uploadReference(metadata);
        console.log(uploadResult);
        console.log("https://arweave.net/" + uploadResult.id);
        setFile(null);
      } catch (error: any) {
        alert("Something went wrong");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [file],
  );

  return (
    <div className="text-balance mt-6 flex max-w-xl flex-col items-center justify-center space-y-4">
      <p>{isConnected ? "Connected" : "Not connected"}</p>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <Button type="submit" disabled={!file || isLoading}>
          Upload
          {isLoading && <Loader className="ml-2 h-4 w-4 animate-spin" />}
        </Button>
      </form>
    </div>
  );
}
