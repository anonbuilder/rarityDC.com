import { useCallback } from 'react'
import { utils } from 'ethers'
import { useRarityDaycareContract } from './useContract'

export default function useRarityDaycare()  {
    const daycare = useRarityDaycareContract()

    const daysPaid = useCallback(
        async (id) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const days = await daycare?.daysPaid(id)
                    resolve(parseInt(days.toString()))
                } catch (e) {
                    reject(e)
                }
            })
        },
        [daycare]
    )

    const registerDaycare = useCallback(
        async (ids, days) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const daysRegistry = Array(ids.length).fill(days, 0, ids.length)
                    const fee = utils.parseUnits((0.08 * ids.length * days).toString(), 'ether')
                    const tx = await daycare?.registerDaycare(ids, daysRegistry, { value: fee })
                    await tx.wait()
                    resolve()
                } catch (e) {
                    reject(e)
                }
            })
        },
        [daycare]
    )

    return { daysPaid, registerDaycare }
}
