import { useMemo } from 'react'
import { getContract } from '../functions/getContract'
import { useWeb3React } from '@web3-react/core'
import {
    RARITY_LIB,
    RARITY_ADDRESS,
    RARITY_DAYCARE_ADDRESS
} from '../constants/constants.js'

import RARITY_ABI from '../constants/abis/rarity.json'
import RARITY_LIB_ABI from '../constants/abis/rarity_library.json'
import RARITY_DAYCARE_ABI from '../constants/abis/daycare.json'

export function useContract(address, ABI, withSignerIfPossible = true){
    const { library, account } = useWeb3React()

    return useMemo(() => {
        if (!address || !ABI || !library) return null
        try {
            return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
        } catch (error) {
            console.error('Failed to get contract', error)
            return null
        }
    }, [address, ABI, library, withSignerIfPossible, account])
}

export function useRarityLibContract(){
    const { chainId } = useWeb3React()
    return useContract(chainId ? RARITY_LIB : undefined, RARITY_LIB_ABI)
}

export function useRarityContract(): Contract | null {
    const { chainId } = useWeb3React()
    return useContract(chainId ? RARITY_ADDRESS : undefined, RARITY_ABI)
}

export function useRarityDaycareContract(): Contract | null {
    const { chainId } = useWeb3React()
    return useContract(chainId ? RARITY_DAYCARE_ADDRESS : undefined, RARITY_DAYCARE_ABI)
}