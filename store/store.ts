import { atom } from 'recoil'
import { walletType } from "@/interfaces/types";

export const walletAtom = atom<walletType[]>({
    key: "walletKey",
    default: []
})

export const refreshAtom = atom<boolean>({
    key: 'refreshAtom',
    default: false
})