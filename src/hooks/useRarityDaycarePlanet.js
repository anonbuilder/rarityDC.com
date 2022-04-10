import { useCallback } from 'react'
import { utils } from 'ethers'
import { useRarityDaycarePlanetContract } from './useContract'

export default function useRarityDaycarePlanet()  {
    const daycare = useRarityDaycarePlanetContract()

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
                    const fee = utils.parseUnits((0.07 * ids.length * days).toString(), 'ether')
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

    const canRegister = useCallback(
        async (address) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const canRegister = await daycare?.canRegister(address)
                    resolve(canRegister)
                } catch (e) {
                    reject(e)
                }
            })
        },
        [daycare]
    )

    return { daysPaid, registerDaycare,canRegister }
}
