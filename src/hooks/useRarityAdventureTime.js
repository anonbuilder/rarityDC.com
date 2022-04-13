import { useCallback } from 'react'
import { useRarityAdventureTimeContract } from './useContract'

export default function useRarityAdventureTime(){
    const adventure = useRarityAdventureTimeContract()
  
    const adventureTime = useCallback(
        async (id) => {
            
            return new Promise(async (resolve, reject) => {
                try {
                    const tx = await adventure?.adventureTime(id)
                    await tx.wait()
                    resolve()
                } catch (e) {
                    reject(e)
                }
            })
        },
        [adventure]
    )

    return { adventureTime }
}

