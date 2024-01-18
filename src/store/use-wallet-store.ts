import { create } from "zustand";

interface WalletState {
  wallet: any;
  setWallet: (wallet: any) => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  wallet: null,
  setWallet: async (wallet: any) => set({ wallet }),
}));
