import { useRarityLibContract } from './useContract'
import { useCallback } from 'react'
import { utils } from 'ethers'

export default function useRarityLibrary(){
    const lib = useRarityLibContract()

    const summonersFull = useCallback(
        async (ids) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const summoners = await lib?.summoners_full(ids)
                    resolve(
                        summoners.map((value, i) => {
                            return {
                                id: ids[i],
                                ability_scores: {
                                    attributes: {
                                        _cha:
                                            value.ability_scores.attributes._cha === 0
                                                ? 8
                                                : value.ability_scores.attributes._cha,
                                        _con:
                                            value.ability_scores.attributes._con === 0
                                                ? 8
                                                : value.ability_scores.attributes._con,
                                        _dex:
                                            value.ability_scores.attributes._dex === 0
                                                ? 8
                                                : value.ability_scores.attributes._dex,
                                        _int:
                                            value.ability_scores.attributes._int === 0
                                                ? 8
                                                : value.ability_scores.attributes._int,
                                        _str:
                                            value.ability_scores.attributes._str === 0
                                                ? 8
                                                : value.ability_scores.attributes._str,
                                        _wis:
                                            value.ability_scores.attributes._wis === 0
                                                ? 8
                                                : value.ability_scores.attributes._wis,
                                    },
                                    created: value.ability_scores.created,
                                    modifiers: {
                                        _cha: value.ability_scores.modifiers._cha,
                                        _con: value.ability_scores.modifiers._con,
                                        _dex: value.ability_scores.modifiers._dex,
                                        _int: value.ability_scores.modifiers._int,
                                        _str: value.ability_scores.modifiers._str,
                                        _wis: value.ability_scores.modifiers._wis,
                                    },
                                    spent_points: parseInt(value.ability_scores.spent_points.toString()),
                                    total_points: parseInt(value.ability_scores.total_points.toString()),
                                },
                                base: {
                                    _class: parseInt(value.base.class.toString()),
                                    _level: parseInt(value.base.level.toString()),
                                    _log: parseInt(value.base.log.toString()),
                                    _name: value.base.name,
                                    _xp: parseInt(utils.formatUnits(value.base.xp.toString(), 'ether')),
                                },
                                gold: {
                                    balance: parseInt(utils.formatUnits(value.gold.balance, 'ether')),
                                    claimable: parseInt(utils.formatUnits(value.gold.claimable, 'ether')),
                                    claimed: parseInt(utils.formatUnits(value.gold.claimed, 'ether')),
                                },
                                materials: {
                                    balance: parseInt(value.materials[0].balance),
                                    scout: parseInt(value.materials[0].scout.toString()),
                                    log: parseInt(value.materials[0].log.toString()),
                                },
                                skills: {
                                    class_skills: value.skills.class_skills,
                                    skills: value.skills.skills,
                                    spent_points: parseInt(value.skills.spent_points.toString()),
                                    total_points: parseInt(value.skills.total_points.toString()),
                                },
                                misc: {
                                    daycare_days_paid: parseInt((value.misc.daycare_days_paid).toString()) + parseInt((value.misc.daycare_days_paid_planet).toString()),
                                },
                            }
                        })
                    )
                } catch (e) {
                    reject(e)
                }
            })
        },
        [lib]
    )

    return { summonersFull}
}
