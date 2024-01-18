import { NearWalletConnector } from "~/components/near-wallet-selector";
import type { Metadata } from "next";
import { Component } from "~/components/component";

export const metadata: Metadata = {
  title: "Mintbase Starter with Next.js",
  description: "Simple Login with Next.js 14",
};

export default function Home() {
  return (
    <>
      <main className="mt-2 flex flex-col items-center justify-center">
        <div className="mx-6 mb-4 mt-4 sm:mx-24">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center justify-center space-y-8">
              <div className="flex flex-col items-center justify-center space-y-8 text-[40px]">
                Mintbase.js Simple Login Example
              </div>
              <NearWalletConnector />
            </div>
            <Component />
          </div>
        </div>
      </main>
    </>
  );
}
