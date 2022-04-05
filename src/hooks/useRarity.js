import { useCallback } from 'react'
import { useRarityContract } from './useContract'

export default function useRarity(){
    const rarity = useRarityContract()

    const summon = useCallback(
        async (_class) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const selectedClass = _class ? _class : rand()
                    const tx = await rarity?.summon(selectedClass)
                    await tx.wait()
                    resolve()
                } catch (e) {
                    reject(e)
                }
            })
        },
        [rarity]
    )

    const adventure = useCallback(
        async (id) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const tx = await rarity?.adventure(id)
                    await tx.wait()
                    resolve()
                } catch (e) {
                    reject(e)
                }
            })
        },
        [rarity]
    )

    const level_up = useCallback(
        async (id) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const tx = await rarity?.level_up(id)
                    await tx.wait()
                    resolve()
                } catch (e) {
                    reject(e)
                }
            })
        },
        [rarity]
    )

    const transferFrom = useCallback(
        async (from, to, id) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const tx = await rarity?.transferFrom(from, to, id)
                    await tx.wait()
                    resolve()
                } catch (e) {
                    reject(e)
                }
            })
        },
        [rarity]
    )

    const isApprovedForAll = useCallback(
        async (owner, operator) => {
            return new Promise(async (resolve, reject) => {
                try {
                    resolve(await rarity?.isApprovedForAll(owner, operator))
                } catch (e) {
                    reject(false)
                }
            })
        },
        [rarity]
    )

    const setApprovalForAll = useCallback(
        async (from) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const tx = await rarity?.setApprovalForAll(from, true)
                    await tx.wait()
                    resolve()
                } catch (e) {
                    reject(e)
                }
            })
        },
        [rarity]
    )

    return { summon, adventure, level_up, transferFrom, isApprovedForAll, setApprovalForAll }
}

function rand() {
    return Math.floor(Math.random() * 11) + 1
}
